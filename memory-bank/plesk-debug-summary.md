# Plesk Next.js Monorepo Deployment Debug Summary

**Last Updated:** June 19, 2025

This document summarizes the definitive findings from a deep debugging session aimed at deploying a pnpm/Turborepo monorepo Next.js application to a Plesk hosting environment.

---

## Final Diagnosis & Core Issues

The deployment failed due to a cascade of distinct issues, each of which needed to be solved in sequence.

### 1. Application Portability (The Symlink Problem)

-   **Problem:** Standard deployment methods (`pnpm deploy`, `next build --standalone`) for a pnpm monorepo create a `node_modules` directory containing symbolic links, which are not portable and break when uploaded to a server.
-   **Evidence:** A local `find . -type l` command on the deployment package revealed hundreds of symlinks.
-   **Solution:** The only reliable method to create a portable package was to use `tar` with the dereference flag (`-h`) to create a compressed archive. This follows all symlinks and archives the actual file contents, resulting in a self-contained `node_modules` directory.
    -   **Command:** `tar -czhf deployment.tar.gz -C ../deploy_output_web .`

### 2. Server Environment Configuration

-   **Problem:** After uploading a correct package, a series of server-side errors occurred.
-   **Sequence of Errors & Fixes:**
    1.  **Apache Permissions:** `Permission Denied` errors on `.htaccess` were solved by setting directory permissions to `755`.
    2.  **Node.js Permissions:** `Cannot find module` errors from within Next.js were solved by setting file permissions to `644`.
    3.  **Plesk Application Root:** A persistent `internal redirect` loop was discovered to be caused by an incorrect **Application Root** path in the Plesk Node.js Toolkit UI. Correcting this was a major breakthrough.

### 3. Application Startup & CJS/ESM Conflict

-   **Problem:** With the environment fixed, the Node.js process still failed, crashing with an `ERR_REQUIRE_ESM` error.
-   **Cause:** The Plesk/Passenger environment attempts to start the application using `require()` (CommonJS), but the Next.js `server.js` is an ES Module.
-   **Solution:** A custom startup script (`plesk-start.cjs`) was created to solve this. The final, working version performs two critical functions:
    1.  `process.chdir()`: Changes the current working directory to the location of the `server.js` file.
    2.  `import()`: Uses a dynamic `import()` to correctly load the ES Module `server.js` file.

### 4. Final Blocker: Unconfigurable Server Environment

-   **Problem:** Even with a perfectly packaged application and a correct startup script, the Phusion Passenger process manager on the server fails to launch the application.
-   **Evidence:** The final error is `Cannot lstat(".../app.js"): No such file or directory`.
-   **Conclusion:** This error proves that the Plesk/Passenger environment is ignoring the "Application Startup File" setting provided in the UI and is hard-coded to look for a file named `app.js`. Renaming our script to `app.js` did not fix this, meaning the issue is a low-level server configuration problem.

---

## Final Recommendation

The deployment is blocked by a server-side configuration issue that is beyond user-level control.

**Action:** Contact the hosting provider's support team.

**Message to Support:**
"My Node.js application fails to start. The Phusion Passenger log shows the error: `Could not spawn process for application ... Cannot lstat("/var/www/vhosts/.../app.js"): No such file or directory`. This error occurs even though the `app.js` file exists in the application root with the correct permissions, and the 'Application Startup File' in the Plesk UI is correctly set. Please investigate why Phusion Passenger cannot find or access the application startup file."