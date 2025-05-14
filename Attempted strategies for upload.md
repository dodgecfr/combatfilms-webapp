Summary of Plesk Deployment Attempts for CombatFilms Web App (apps/web)
This document outlines the different strategies attempted to deploy the Next.js application (apps/web), managed within a pnpm monorepo, to a Plesk hosting environment.
Attempt 1: Git Deployment with Server-Side Build
Strategy: Use Plesk's Git extension to pull the repository source code directly onto the server. Then, use Plesk's Node.js extension or SSH access to install dependencies and run the build command (pnpm build or npm run build) on the Plesk server itself.
Process:
Configure the Git repository in Plesk.
Pull the latest code.
Attempt to install dependencies via Plesk terminal/SSH.
Failure Point:
The Plesk Node.js environment did not have pnpm readily available or easily installable.
Attempting npm install on the project (which uses pnpm and has a pnpm-lock.yaml file) resulted in dependency inconsistencies and errors, as npm does not respect the pnpm lockfile structure.
Outcome: Failed due to inability to correctly install project dependencies using the required package manager (pnpm) on the Plesk server.
Attempt 2: Convert Project to npm Locally
Strategy: Modify the local monorepo to use npm instead of pnpm. This involves removing pnpm-lock.yaml, generating a package-lock.json, and potentially adjusting scripts. The goal was to then use either Git deployment (Attempt 1) or manual upload (Attempt 3/4) with npm commands on the server.
Process:
Locally delete pnpm-lock.yaml.
Run npm install to generate package-lock.json.
Attempt to fix any resulting dependency conflicts or build script errors.
Failure Point: Converting package managers, especially in a monorepo using tools like Turborepo, can introduce subtle issues. Dependency resolution differences between pnpm and npm likely caused build or runtime errors that were difficult to resolve.
Outcome: Failed due to complexities and errors encountered during the conversion process from pnpm to npm.
Attempt 3: Standalone Build Artifact Deployment
Strategy: Build the application locally (pnpm build) with Next.js's output: 'standalone' option enabled. Upload only the generated artifacts (.next/standalone, .next/static, public) to the Plesk server's Application Root. Configure Plesk Node.js to run the server.js file within the standalone output.
Process:
Configure next.config.js for output: 'standalone'.
Run pnpm build locally.
Upload .next/standalone, .next/static, public to Plesk.
Configure Plesk Node.js settings (Startup File, Env Vars).
Failure Point: This strategy encountered several issues (detailed in PLESK_DEPLOYMENT_STATUS_SUMMARY.md):
Initial path configuration errors in Plesk.
ERR_REQUIRE_ESM error due to Passenger trying to require() an ESM file (mitigated with plesk-start.js wrapper).
Persistent Error: Cannot find module 'next' because the pnpm build process with output: 'standalone' did not correctly copy the necessary node_modules (like the next package itself) into the .next/standalone directory due to pnpm's symlinking structure.
Outcome: Currently failing because the standalone artifacts are incomplete (missing crucial runtime dependencies in node_modules).
Attempt 4: Manual Upload of Build Artifacts + Full node_modules (Workaround)
Strategy: Build locally (pnpm build). Manually prepare a copy of the entire root node_modules folder with symlinks resolved (dereferenced). Upload the build artifacts (.next, public) and the complete, dereferenced node_modules folder to the Plesk Application Root. Use the plesk-start.js wrapper.
Process:
Run pnpm build locally.
Attempt to create a dereferenced copy of the root node_modules locally (using cp -RL, robocopy, pnpm deploy, or tar).
Upload .next, public, and the dereferenced node_modules to Plesk.
Configure Plesk to use plesk-start.js.
Failure Point: This is the current active attempt. The primary blocker seems to be successfully creating and uploading a complete and correct dereferenced node_modules folder. The last error (Cannot find module 'next') suggests the node_modules on the server are still incomplete or inaccessible to the Node.js process run by Passenger. Difficulty confirming successful dereferencing locally and ensuring complete FTP transfer of the large node_modules folder are key challenges.
Outcome: In progress, currently blocked.
Overall Summary: Deploying a Next.js application from a pnpm monorepo to Plesk using common methods has proven challenging due to incompatibilities between Plesk's environment/tooling (lack of native pnpm support, Passenger's ESM handling) and the project's specific setup (pnpm symlinks interfering with dependency packaging/transfer).