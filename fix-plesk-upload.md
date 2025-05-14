Plesk Deployment Status Summary for CombatFilms Web App (apps/web)
This document summarizes the deployment attempts, issues encountered, and the current status of deploying the CombatFilms Next.js web application (apps/web) to a Plesk server.
Goal: Deploy the Next.js frontend (apps/web) to Plesk, using a local/CI build process with output: 'standalone'. The API (apps/api) is hosted separately on Vercel.
Plesk Environment:
Domain: dreamy-brahmagupta.216-230-228-149.plesk.page
Application Root: /var/www/vhosts/globalqrf.org/dreamy-brahmagupta.216-230-228-149.plesk.page/
Node.js Version: 21.7.3 (via Plesk Extension)
Process Manager: Phusion Passenger (via Plesk Extension)
I. Completed Steps & Initial Setup
Pre-deployment Checks: Verified Node.js compatibility, decided on standalone output strategy.
next.config.js: Modified apps/web/next.config.js to include output: 'standalone'.
Local Build: Successfully ran pnpm build within the apps/web directory. Generated initial build artifacts (.next/standalone, .next/static, public).
Plesk Node.js App Configured:
Set Application Root.
Set Environment Variables:
NODE_ENV=production
PORT=3000
HOSTNAME=127.0.0.1
NEXT_PUBLIC_API_URL=https://api.placeholder.com (Placeholder)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
DATABASE_URL=...
Basic Server Test: Successfully ran simple-test.js (basic Node HTTP server) via Plesk, confirming the base Plesk/Passenger/Node.js environment is functional.
II. Deployment Issues Encountered & Troubleshooting Path
Issue: Default Plesk page displayed.
Fix: Removed default index.html from Application Root.
Issue: Initial attempts failed to start the app (path errors).
Fix: Corrected Plesk "Application Startup File" path after identifying the actual location: .next/standalone/apps/web/server.js.
Issue: Error [ERR_REQUIRE_ESM] when Passenger tried to require() the server.js file.
Cause: The Next.js server.js (or its dependencies) is an ES Module.
Fix: Created a CommonJS wrapper script plesk-start.js in the Application Root, which uses dynamic import('./.next/standalone/apps/web/server.js') to load the actual server. Set Plesk "Application Startup File" to plesk-start.js.
Issue: Error: Cannot find module 'next' originating from within the dynamically imported server.js.
Cause Investigation:
Hypothesis 1: node_modules were not correctly packaged within .next/standalone by the pnpm build process due to pnpm workspace complexities. Confirmed: Local apps/web/.next/standalone/node_modules only contained .pnpm, not the actual next package.
Hypothesis 2: Manually uploading the entire root node_modules folder failed because the FTP client did not follow symlinks present in the local pnpm node_modules structure (e.g., node_modules/next was a symlink). Confirmed: User verified local node_modules/next is a symlink and FTP likely didn't copy the target files.
Hypothesis 3: Copying via cp -RL failed to dereference symlinks (reported by user).
III. Current Status & Hypothesis
The base Plesk environment works.
The plesk-start.js wrapper correctly handles the ESM entry point (server.js).
The application fails because the running server.js cannot resolve require('next').
This is due to the absence of the actual next package files within the node_modules directory accessible to the running process on the server.
The root cause is the difficulty in transferring pnpm's symlinked node_modules structure to the server with all symlinks properly resolved into actual files.
IV. Current Recommended Solution Attempt
Use pnpm deploy command locally to create a deployment-ready directory with dereferenced node_modules.
V. Immediate Next Steps
Run pnpm deploy Locally:
Open a terminal in your local monorepo root.
Execute: pnpm --filter web deploy ../deploy_output_web (replace web with the actual package name from apps/web/package.json if different; adjust ../deploy_output_web path if desired).
Verify pnpm deploy Output:
Navigate into the local ../deploy_output_web folder.
Inspect ../deploy_output_web/node_modules/next. Confirm it contains the actual source files and directories for the next package, NOT a symlink.
If Verification Succeeds:
Clean Plesk: Delete existing .next, node_modules, public folders from the Plesk Application Root (/var/www/vhosts/globalqrf.org/dreamy-brahmagupta.216-230-228-149.plesk.page/).
Upload to Plesk:
Upload the entire node_modules folder from local ../deploy_output_web to the Plesk Application Root.
Upload the entire .next folder from local apps/web/.next to the Plesk Application Root.
Upload the entire public folder from local apps/web/public to the Plesk Application Root.
Confirm plesk-start.js: Ensure the plesk-start.js wrapper script exists in the Plesk Application Root.
Confirm Plesk Settings: Ensure "Application Startup File" is set to plesk-start.js.
Restart & Test: Restart the Node.js app in Plesk and test the website (clear browser cache).
If Verification Fails (or pnpm deploy errors):
Attempt the tar method to create a dereferenced copy locally:
# Run from local monorepo root
mkdir node_modules_copy
tar -cf - -C node_modules . --dereference | tar -xf - -C node_modules_copy
Use code with caution.
Bash
Verify node_modules_copy/next contains real files.
If tar works, proceed with Step 3 (Clean Plesk, Upload, Test), but upload node_modules_copy (renaming it to node_modules on the server).
VI. Required Server State for Next Attempt
The Plesk Application Root (/var/www/vhosts/globalqrf.org/dreamy-brahmagupta.216-230-228-149.plesk.page/) should contain:
node_modules/ (Containing actual package files, not symlinks, copied from the verified output of pnpm deploy or tar)
.next/ (Copied from local apps/web/.next/)
public/ (Copied from local apps/web/public/)
plesk-start.js (The CommonJS wrapper script)
