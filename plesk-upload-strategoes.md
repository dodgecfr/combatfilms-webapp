# Plesk Deployment Status & Troubleshooting Summary for CombatFilms Web App (apps/web)

**Last Updated:** May 14, 2025

This document summarizes the deployment attempts, issues encountered, strategies employed, and the current status of deploying the CombatFilms Next.js web application (apps/web) to a Plesk server.

**Goal:** Deploy the Next.js frontend (apps/web) to Plesk, using a local/CI build process with Next.js's `output: 'standalone'`. The API (apps/api) is hosted separately on Vercel.

**Plesk Environment (as last configured):**
*   **Domain:** dreamy-brahmagupta.216-230-228-149.plesk.page
*   **Application Root:** `/var/www/vhosts/globalqrf.org/dreamy-brahmagupta.216-230-228-149.plesk.page/` (referred to as `APPLICATION_ROOT` or `combatfilms-temp` in some logs/discussions)
*   **Node.js Version:** 21.7.3 (via Plesk Extension)
*   **Process Manager:** Phusion Passenger (via Plesk Extension)

---

## I. Initial Setup & Early Attempts (Summary from `fix-plesk-upload.md` and `Attempted strategies for upload.md`)

### A. Pre-deployment & Plesk Configuration
1.  **Pre-deployment Checks:** Verified Node.js compatibility.
2.  **Plesk Node.js App Configured:**
    *   Set Application Root.
    *   Set Environment Variables: `NODE_ENV=production`, `PORT=3000`, `HOSTNAME=127.0.0.1`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `DATABASE_URL`.
3.  **Basic Server Test:** Successfully ran `simple-test.js` (basic Node HTTP server) via Plesk, confirming base Plesk/Passenger/Node.js environment functionality.

### B. Attempt 1: Git Deployment with Server-Side Build
*   **Strategy:** Use Plesk's Git extension to pull source, then build on server.
*   **Failure Point:** Plesk environment lacked pnpm. `npm install` on pnpm project caused dependency inconsistencies.
*   **Outcome:** Failed.

### C. Attempt 2: Convert Project to npm Locally
*   **Strategy:** Modify local monorepo to use npm, then attempt Git deployment or manual upload.
*   **Failure Point:** Complexities and errors during pnpm to npm conversion in a Turborepo monorepo.
*   **Outcome:** Failed.

### D. Attempt 3: Initial Standalone Build Artifact Deployment (Manual Upload)
*   **Strategy:**
    1.  Modified `apps/web/next.config.js` to include `output: 'standalone'`.
    2.  Ran `pnpm build` locally within `apps/web`. Generated initial build artifacts (`.next/standalone`, `.next/static`, `public`).
    3.  Uploaded these artifacts to Plesk.
*   **Issues Encountered & Fixes:**
    *   **Issue:** Default Plesk page displayed.
        *   **Fix:** Removed default `index.html` from Application Root.
    *   **Issue:** Initial attempts failed to start the app (path errors).
        *   **Fix:** Corrected Plesk "Application Startup File" path after identifying the actual location: `.next/standalone/apps/web/server.js`. (Path later confirmed to be relative to `apps/web` within `standalone`).
    *   **Issue:** Error `[ERR_REQUIRE_ESM]` when Passenger tried to `require()` the `server.js` file (because `server.js` is an ES Module).
        *   **Fix:** Created a CommonJS wrapper script `plesk-start.js` in the Application Root, using dynamic `import('./.next/standalone/apps/web/server.js')`. Set Plesk "Application Startup File" to `plesk-start.js`.
    *   **Persistent Issue:** `Error: Cannot find module 'next'` originating from within the dynamically imported `server.js`.
        *   **Cause Investigation:**
            *   Hypothesis 1: `node_modules` not correctly packaged within `.next/standalone` by `pnpm build` (pnpm workspace complexities). Confirmed: Local `apps/web/.next/standalone/node_modules` only contained `.pnpm`, not the actual `next` package.
            *   Hypothesis 2: Manually uploading root `node_modules` failed due to FTP client not following symlinks in local pnpm structure.
            *   Hypothesis 3: `cp -RL` reportedly failed to dereference symlinks.
*   **Outcome:** Failing due to incomplete standalone artifacts (missing runtime dependencies like `next` for `server.js`).

### E. Attempt 4: Manual Upload of Build Artifacts + Full `node_modules` (Workaround)
*   **Strategy:** Build locally (`pnpm build`). Manually prepare a dereferenced copy of root `node_modules`. Upload artifacts (`.next`, `public`) and dereferenced `node_modules`. Use `plesk-start.js`.
*   **Failure Point:** Difficulty creating/uploading a complete dereferenced `node_modules`. The `Error: Cannot find module 'next'` persisted.
*   **Outcome:** In progress, blocked.

---

## II. Focused Troubleshooting with `pnpm deploy` and Standalone Output (Recent Steps)

The primary goal became creating a clean, verifiable deployment package locally using `pnpm deploy` and ensuring the Next.js `output: 'standalone'` artifacts were correctly packaged and utilized.

### A. Verifying `pnpm deploy` and Local Build Artifacts
1.  **Initial `pnpm deploy` Attempt:**
    *   Command: `pnpm --filter web deploy ../deploy_output_web` (from monorepo root).
    *   Observation: User recalled `pnpm deploy` had issues putting everything into one directory.
    *   Clarification: `pnpm deploy` creates a *new* target directory and doesn't modify source.
2.  **Build before Deploy:**
    *   Ran `pnpm --filter web build`. Build successful.
    *   Ran `pnpm --filter web deploy ../deploy_output_web`.
    *   Output: Showed peer dependency warnings (e.g., `cmdk`, `@radix-ui` expecting React 18, found React 19).
    *   **Key Finding:** The `deploy_output_web` directory contained source files and `node_modules` (with `.pnpm` structure) but **did not contain the `.next` build artifacts.** This was a misunderstanding of `pnpm deploy`'s default behavior (it deploys package files, not build artifacts unless configured).

### B. Correcting `next.config.js` for `output: 'standalone'`
1.  **Investigation:** Checked `apps/web/.next/` after a build. No `standalone` folder was present.
2.  **Discovery:** The `apps/web/next.config.js` file was missing the `output: 'standalone'` line.
3.  **Fix:** Added `output: 'standalone'` to `apps/web/next.config.js`.
4.  **Re-build:** Ran `pnpm --filter web build`.
5.  **Verification:**
    *   `apps/web/.next/standalone/` folder was now created.
    *   **Key Finding:** `server.js` was located at `apps/web/.next/standalone/apps/web/server.js`.
    *   `apps/web/.next/standalone/node_modules/` contained only a `.pnpm` folder and some packages, but no direct `next` folder was immediately visible. No `public` folder directly under `standalone`.

### C. Refining the Deployment Package Assembly and `plesk-start.js`
1.  **Revised Local Packaging Strategy:**
    *   Clean `../deploy_output_web` and `apps/web/.next`.
    *   Run `pnpm --filter web build` (generates `apps/web/.next/standalone/...`).
    *   Run `pnpm --filter web deploy ../deploy_output_web` (generates `../deploy_output_web/node_modules` and copies source files).
    *   Manually copy `apps/web/.next` into `../deploy_output_web/`.
    *   Manually copy `apps/web/public` into `../deploy_output_web/`.
    *   Create `../deploy_output_web/plesk-start.js` to dynamically import `./.next/standalone/apps/web/server.js`.
2.  **Plesk Upload & Test 1 (with `plesk-start.js`):**
    *   Uploaded the assembled `deploy_output_web` contents.
    *   Set Plesk startup file to `plesk-start.js`.
    *   **Error:** `Error [ERR_REQUIRE_ESM]: require() of ES Module /var/www/vhosts/globalqrf.org/combatfilms-temp/plesk-start.js ... package.json contains "type": "module"`.
3.  **Fix for `ERR_REQUIRE_ESM` on `plesk-start.js`:**
    *   Renamed `plesk-start.js` to `plesk-start.cjs` locally and on server.
    *   Updated Plesk startup file to `plesk-start.cjs`.
    *   `plesk-start.cjs` content (using dynamic `import()`):
        ```javascript
        // console.log, import('./.next/standalone/apps/web/server.js')
        ```
4.  **Plesk Upload & Test 2 (with `plesk-start.cjs`):**
    *   **Error:** `Error starting Next.js server via dynamic import: Error: Cannot find module 'next'` originating from `.../.next/standalone/apps/web/server.js`.
        *   This indicated `server.js` itself couldn't find `next`.

### D. Attempting to Fix `server.js` Module Resolution
1.  **Modifying `plesk-start.cjs` to Change Working Directory (`chdir`):**
    *   Updated `plesk-start.cjs` to `require('node:path')` and use `process.chdir()` to change the current working directory to the location of `server.js` (`.../.next/standalone/apps/web/`) before dynamically importing it using `import('file://' + path.join(process.cwd(), 'server.js'))`.
    *   Initial `plesk-start.cjs` update mistakenly used ESM `import path from 'node:path';` leading to `SyntaxError: Cannot use import statement outside a module`.
    *   Corrected `plesk-start.cjs` to use `const path = require('node:path');`.
2.  **Plesk Upload & Test 3 (with `chdir` in `plesk-start.cjs`):**
    *   **Error:** Still `Error: Cannot find module 'next'` originating from `.../.next/standalone/apps/web/server.js`.
        *   This confirmed the issue was likely with the contents or accessibility of `node_modules` for the `server.js` script, specifically the `.../.next/standalone/node_modules/` folder.

### E. Strategy 1: Improving Next.js Standalone Build with `outputFileTracingRoot`
1.  **Hypothesis:** Next.js's file tracer might need help in a pnpm monorepo to correctly populate `.../.next/standalone/node_modules/`.
2.  **Attempt 1 (Incorrect Config):** Added `experimental.outputFileTracingRoot: path.join(__dirname, '../../')` to `apps/web/next.config.js`.
    *   Build Warning: `experimental.outputFileTracingRoot has been moved to outputFileTracingRoot`.
3.  **Attempt 2 (Corrected Config):** Moved `outputFileTracingRoot: path.join(__dirname, '../../')` to be a top-level option in `apps/web/next.config.js`.
4.  **Local Build & Verification:**
    *   Ran `pnpm --filter web build` after deleting `apps/web/.next`.
    *   **Observation:** `apps/web/.next/standalone/node_modules/` *still* only contained a `.pnpm` folder and did not have a directly visible `next` package folder. This suggested `outputFileTracingRoot` alone didn't make `standalone/node_modules` self-sufficient in an obvious way for the `next` package.

### F. Local Testing of Strategy 2 (Force Standalone Server to Use Root `node_modules`)
1.  **Local Package Preparation:**
    *   Built `../deploy_output_web` as before (clean build, `pnpm deploy`, copy `.next`, copy `public`).
    *   Used the `plesk-start.cjs` with `chdir`.
    *   **Crucially, for this local test, the `../deploy_output_web/.next/standalone/node_modules/` folder was *NOT* initially deleted.**
2.  **Local Execution:**
    *   `cd ../deploy_output_web`
    *   Set `NODE_ENV=production`, `PORT=3004`, `HOSTNAME=127.0.0.1`.
    *   Ran `node plesk-start.cjs`.
3.  **Local Test Result:**
    *   **SUCCESS!** Output:
        ```
        Attempting to start Next.js server from plesk-start.cjs (Strategy 2)...
        ...
        New CWD: /Volumes/JJ_EDIT_4TB/_APPS/combatfilms/deploy_output_web/.next/standalone/apps/web
        Next.js server started successfully after CWD change (Strategy 2).
           ▲ Next.js 15.3.1
           - Local:        http://127.0.0.1:3004
           - Network:      http://127.0.0.1:3004

         ✓ Starting...
         ✓ Ready in 515ms
        ```
    *   This indicated that locally, even with `../deploy_output_web/.next/standalone/node_modules/` present (and being just a `.pnpm` structure), the `server.js` could find `next`. This could be due to the `outputFileTracingRoot` making the `.pnpm` structure within `standalone/node_modules` *just good enough* for local resolution, or Node.js successfully traversing up to the root `../deploy_output_web/node_modules/`.

---

## III. Current Recommended Next Steps for Plesk Deployment

Based on the successful local test:

1.  **Final Local Package Preparation (Applying Strategy 2 for Robustness on Plesk):**
    *   Use the `../deploy_output_web` directory that was successfully tested locally.
    *   **Explicitly delete `../deploy_output_web/.next/standalone/node_modules/`** to ensure the Plesk deployment relies *only* on the known-good root `../deploy_output_web/node_modules/`.
        Command: `rm -rf /Volumes/JJ_EDIT_4TB/_APPS/combatfilms/deploy_output_web/.next/standalone/node_modules`
2.  **Plesk Server Preparation:**
    *   Thoroughly clean the Plesk Application Root (`/var/www/vhosts/globalqrf.org/dreamy-brahmagupta.216-230-228-149.plesk.page/`) by deleting any existing `node_modules`, `.next`, `public`, `plesk-start.cjs`, etc.
3.  **Upload to Plesk:**
    *   Upload the entire contents of the modified local `../deploy_output_web/` directory (which now lacks `.next/standalone/node_modules/`) to the Plesk Application Root.
4.  **Plesk Configuration:**
    *   Application Startup File: `plesk-start.cjs`
    *   Node.js Version: `21.7.3`
    *   Environment Variables: `NODE_ENV=production`, `PORT=3000`, `HOSTNAME=127.0.0.1`, and all application-specific variables.
5.  **Restart & Test on Plesk:**
    *   Restart the Node.js application via the Plesk interface.
    *   Carefully monitor Plesk logs for output from `plesk-start.cjs` and any errors.
    *   Test the live website.

This approach combines the benefits of the `outputFileTracingRoot` (which may have improved the overall `.next` build) with the robustness of forcing reliance on the `pnpm deploy`-generated root `node_modules` folder.

---

## IV. Final Debugging Session (June 19, 2025)

This session involved a systematic process to isolate the root cause of the deployment failure, revealing a cascade of issues.

### A. The Core Problem: Creating a Portable Build

1.  **Initial Hypothesis:** The `node_modules` directory was not being uploaded correctly to Plesk, causing `Cannot find module 'next'` errors.
2.  **Verification:** We added diagnostic logging to `plesk-start.cjs` to check for the existence of `node_modules/next` on the server. The check failed, confirming an incomplete `node_modules` directory.
3.  **The Symlink Discovery:** The user correctly identified that the issue wasn't an incomplete transfer, but that `pnpm deploy` was creating a `node_modules` directory full of symbolic links, which are not portable. A local `find . -type l` command confirmed this, revealing hundreds of symlinks. This was the true cause of the incomplete `node_modules` on the server.
4.  **The `tar` Solution:** We created a portable, self-contained deployment package by archiving the `pnpm deploy` output with `tar -czhf`, which dereferences symlinks and copies the actual file content. This successfully solved the module portability problem.

### B. The Server Environment Cascade Failure

After uploading the correct package, we encountered a series of server-side issues.

1.  **Apache Permissions (`.htaccess` error):**
    *   **Symptom:** Apache error `(13)Permission denied: ... unable to check htaccess file`.
    *   **Cause:** The extracted files had incorrect permissions. Apache couldn't even read the `/public` directory.
    *   **Fix:** Set directory permissions to `755` recursively.

2.  **Node.js File Permissions (`@swc/helpers` error):**
    *   **Symptom:** Node.js error `Cannot find module '@swc/helpers/_/_interop_require_default'`.
    *   **Cause:** The directory permissions were fixed, but the file permissions were still wrong. Node.js could see the directories but couldn't read the `.js` files inside.
    *   **Fix:** Set file permissions to `644` recursively.

3.  **Plesk Application Root Configuration:**
    *   **Symptom:** A cascade of redirect loops and `Could not spawn process` errors.
    *   **Discovery:** The user identified that the **Application Root** in the Plesk Node.js Toolkit UI was set incorrectly.
    *   **Fix:** Correcting the Application Root path in the Plesk UI. This was a critical breakthrough.

4.  **CJS/ESM Conflict (`ERR_REQUIRE_ESM`):**
    *   **Symptom:** With the environment finally stable, the original error returned: `require() of ES Module ... not supported`.
    *   **Cause:** Our startup script was using `require()` on the Next.js `server.js` (an ES Module).
    *   **Fix:** Re-implementing the `plesk-start.cjs` wrapper to use a dynamic `import()` and `process.chdir()` to set the correct working directory.

5.  **Final Blocker: Phusion Passenger Startup Failure**
    *   **Symptom:** `Cannot lstat(".../app.js"): No such file or directory`.
    *   **Cause:** Even with all application code and Plesk UI settings seemingly correct, the underlying Phusion Passenger process manager is ignoring the "Application Startup File" setting and is hard-coded to look for a file named `app.js`.
    *   **Attempted Fix:** Renaming `plesk-start.cjs` to `app.js`.
    *   **Final Result:** The error persisted. This indicates a fundamental server configuration issue within Plesk/Passenger that is beyond user-level control. The server environment cannot be made to recognize and execute the startup file.

### C. Final Conclusion & Recommendation

The application code and deployment package are now correct. The deployment is blocked by a server-side configuration issue within the Plesk/Phusion Passenger environment that prevents it from correctly identifying and launching the specified startup file.

**Recommendation:** Contact hosting provider support with the final error log: `Cannot lstat("/var/www/vhosts/.../app.js"): No such file or directory`.