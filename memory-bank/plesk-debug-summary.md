# Plesk Next.js Monorepo Deployment Debug Summary

## What We Tried

1. **Plesk Git Integration & Node.js Setup**
   - Repo cloned and dependencies installed via Plesk UI.
   - Node.js version and environment variables set via Plesk.

2. **Build Process**
   - Overcame monorepo and `pnpm` issues by:
     - Adding `pnpm` as a dev dependency.
     - Updating build scripts to use `npx pnpm install` and `npx turbo run build`.
   - Build now completes successfully in Plesk.

3. **Clerk/Authentication Issues**
   - Temporarily removed all Clerk-related providers and components to avoid build/runtime errors due to missing environment variables.

4. **API/Database Issues**
   - Commented out API calls and provided dummy values for `DATABASE_URL` and `NEXT_PUBLIC_API_URL` to avoid runtime crashes.

5. **Application Startup**
   - Tried every possible combination for the Plesk "Application Startup File":
     - `node_modules/.bin/turbo` (with and without turbo.json tweaks)
     - `npm` (Plesk does not accept this as a file)
     - Custom wrapper scripts (`start-plesk.sh`) using:
       - `npx turbo run start --filter=web`
       - `pnpm --filter=web start`
       - `npx next start`
       - `./node_modules/.bin/next start`
   - All attempts resulted in Passenger reporting "application process exited prematurely" and Apache reporting "internal redirect" errors.

6. **SSH Debugging**
   - SSH shell is extremely minimal: no `node`, `npx`, `sed`, `dirname`, or other basic Unix utilities.
   - Cannot run or debug Node.js apps via SSH on this host.

---

## What We Know Does NOT Work

- Any startup file that is not an actual file (e.g., `npm`).
- Any script that relies on `node`, `npx`, or `pnpm` being available in the shell PATH.
- Any script that relies on basic Unix utilities (`dirname`, `sed`, etc.).
- Running Next.js via `./node_modules/.bin/next start` fails due to missing `node` in the shell PATH.
- The Plesk/Passenger environment is too minimal for custom scripts unless all dependencies (including Node.js itself) are available in the PATH.

---

## Key Blockers

- **Node.js is not available in the SSH shell or in the PATH for custom scripts.**
- **Plesk/Passenger can run Node.js apps via the UI, but not via SSH or custom shell scripts unless Node.js is globally available.**
- **The application process (Next.js) cannot start because the shell cannot find `node` to execute the server.**
- **Missing or dummy environment variables (like `DATABASE_URL`) may also cause the app to crash, but the primary blocker is the missing Node.js binary.**

---

## Next Steps

- You must either:
  - Contact your hosting provider or Plesk admin to enable Node.js in your shell environment, or
  - Use only the Plesk UI for deployment and debugging, and ensure all required environment variables are set in the UI.

- If you want to continue with Plesk UI only, you may need to:
  - Use only supported startup files (like `node_modules/.bin/turbo` or `node_modules/.bin/next` if Plesk can find `node`).
  - Ensure all runtime environment variables are set in the Plesk UI.
  - Accept that SSH debugging is not possible on this host.

---

## Summary

The core blocker is that the Plesk/Passenger environment does not provide `node` in the PATH for custom scripts or SSH, so any attempt to start the app outside of the Plesk UI fails. All other issues (Clerk, API, database) are secondary to this fundamental environment limitation.

You can now safely restart your context or revisit the deployment later with this summary as a reference.