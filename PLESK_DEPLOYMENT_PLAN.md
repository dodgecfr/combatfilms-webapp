# Plesk Deployment Plan for CombatFilms Web App

This document outlines the steps required to deploy the CombatFilms Next.js web application (`apps/web`) to a Plesk server.

**Strategy:** Build locally/CI, deploy artifacts using `standalone` output. API hosted on Vercel.

## I. Pre-deployment Checks & Configuration

*   [X] **Verify Node.js Compatibility:** Node.js 21.7.3 on Plesk is compatible with Next.js 15.
    *   _Action:_ Checked `apps/web/package.json`.
*   [X] **Determine Deployment Strategy:** Build locally/CI and copy artifacts to Plesk.
    *   _Decision:_ Confirmed with user.
*   [X] **Analyze `next.config.js`:** Confirmed no `output` mode is set by default. Decided to use `standalone`.
    *   _Action:_ Read the file. Agreed to add `output: 'standalone'`.
*   [ ] **Identify Production API URL:** Determine the URL for the production API (`apps/api`) hosted on Vercel.
    *   _Action:_ User to find the URL in their Vercel project dashboard (Domains section). This URL is needed for the `NEXT_PUBLIC_API_URL` environment variable in Plesk (will be added later).

## II. Build Process Adaptation

*   [X] **Configure `output: 'standalone'`:** Modified `apps/web/next.config.js` to include `output: 'standalone'`.
    *   _Action:_ Completed in 'Code' mode.

## III. Build the Application (Locally/CI)

*   [X] **Run Build Command:** Executed the build process for `apps/web`.
    *   _Command:_ `pnpm build` within the `apps/web` directory. Generated `.next/standalone` and `.next/static`.
    *   _Action:_ Build completed successfully. Artifacts ready in `apps/web`.

## IV. Plesk Server Configuration (Manual Steps)

*   [ ] **Set up Domain/Subdomain:** Configure the target domain/subdomain in Plesk where the app will reside.
*   [ ] **Configure Node.js Application:** Use the Plesk Node.js extension.
    *   **Application Root:** Set this to the directory where you upload the `standalone` build artifacts (e.g., `/var/www/vhosts/yourdomain.com/httpdocs/`).
    *   **Document Root:** Usually set relative to the Application Root, often `/` or potentially pointing to the `public` folder if needed (check Plesk/Next.js standalone docs).
    *   **Application Startup File:** Should be `server.js` (located inside the `.next/standalone` directory). Plesk needs the path relative to the Application Root (e.g., `.next/standalone/server.js`).
*   [ ] **Set Environment Variables:** Configure in Plesk Node.js settings:
    *   `NODE_ENV=production`
    *   `PORT` (Plesk *might* set this automatically, otherwise try 3000, but Plesk often manages the port binding). Check Plesk Node.js extension docs/UI.
    *   `HOSTNAME=127.0.0.1` (Recommended for Next.js standalone to listen locally, letting Plesk's reverse proxy handle external traffic).
    *   `NEXT_PUBLIC_API_URL=<your_vercel_api_url>` (**Note:** Set this later once Vercel API is deployed. For initial test, either omit or use a placeholder like `https://api.placeholder.com`).
    *   Any other required variables (check `.env` files or project configuration, e.g., Clerk keys).
*   [ ] **Configure Reverse Proxy (Handled by Plesk):** Ensure Plesk correctly proxies requests from Nginx/Apache to the Node.js app. (Usually automatic via the Node.js extension). Verify proxy settings if issues arise.

## V. Deployment (Manual Steps)

*   [ ] **Transfer Files:** Copy the following from your local `apps/web` build output to the **Application Root** directory on the Plesk server:
    *   The entire `.next/standalone` directory.
    *   The entire `.next/static` directory (needs to be alongside `standalone`).
    *   The entire `public` directory.
*   [ ] **Start/Restart Application:** Use the Plesk interface to start or restart the Node.js application.
*   [ ] **Verify Deployment:** Access the application via its domain and test functionality. Expect static content/pages to work, but API-dependent features will fail until API URL is configured.

## VI. Post-deployment

*   [ ] **Deploy API:** Deploy `apps/api` to Vercel and obtain its production URL.
*   [ ] **Update Plesk Env Var:** Add the correct `NEXT_PUBLIC_API_URL` to the Plesk Node.js application environment variables and restart the app.
*   [ ] **Full Verification:** Test all application functionality, including API interactions.
*   [ ] **Monitor Logs:** Check application logs via Plesk for errors.
*   [ ] **Set up Backups:** Configure regular backups in Plesk.

---

**Outstanding Items:**

*   User to determine the production domain/subdomain for the web app on Plesk.
*   User to perform manual Plesk configuration and file transfer (Steps IV & V).
*   User to deploy `apps/api` to Vercel and find its production URL.
*   User to update `NEXT_PUBLIC_API_URL` in Plesk later (Step VI).