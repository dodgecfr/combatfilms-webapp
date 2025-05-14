# Tech Context: Combat Films Platform

Outlines the technologies used, development setup, technical constraints, dependencies, and tool usage patterns for the Combat Films & Research web platform.

## Technologies Used
- **Programming Language:** TypeScript
- **Frontend Framework:** Next.js (v15+, using App Router)
- **UI Library:** React (v19+)
- **Styling:** Tailwind CSS, `shadcn/ui` components
- **Backend Framework:** Node.js (Likely Hono or similar lightweight framework for API routes/serverless functions)
- **Database ORM:** Drizzle ORM
- **Database:** Likely PlanetScale (MySQL compatible) - *Needs confirmation*
- **Authentication:** Clerk
- **Payments:** PayPal
- **Package Manager:** pnpm
- **Monorepo Tool:** Turborepo (`turbo`)
- **Deployment Platform:** Vercel
- **Linting/Formatting:** Biome (`biome.json`)
- **Testing:** Vitest (`vitest.config.ts`)

## Development Setup
- **Prerequisites:** Node.js, pnpm
- **Installation:** Run `pnpm install` in the root directory.
- **Environment Variables:** Requires setting up `.env` files in relevant packages/apps (e.g., `apps/api`, `apps/web`, `packages/db`) with necessary API keys and connection strings (Clerk, PayPal, Database, etc.). Refer to `.env.example` files if they exist.
- **Running Locally:** Use `pnpm dev` (likely managed by `turbo`) to start the development servers for web and API.
- **Database Migrations:** Use `pnpm db:generate` and `pnpm db:push` (or similar scripts defined in `packages/db/package.json`) for Drizzle migrations.

## Technical Constraints
- **Platform:** Primarily designed for Vercel deployment.
- **Database:** Tied to the chosen database provider (likely PlanetScale).
- **Authentication:** Reliant on Clerk's service and limitations.
- **Payments:** Reliant on PayPal's API and capabilities.
- **Browser Compatibility:** Standard constraints for modern web applications using React/Next.js.

## Key Dependencies (Illustrative - check `package.json` files for specifics)
- `next`: Core frontend framework.
- `react`, `react-dom`: UI library.
- `tailwindcss`: CSS utility framework.
- `@clerk/nextjs`: Clerk integration for Next.js.
- `drizzle-orm`, `drizzle-kit`: Database ORM and migration tools.
- `@paypal/react-paypal-js`: PayPal React components.
- `hono`: (Potential) Backend API framework.
- `lucide-react`: Icon library.
- `zod`: Schema validation (often used with forms/APIs).
- `@tanstack/react-query`: Data fetching and caching (used by `QueryProvider`).

## Tool Usage Patterns
- **`pnpm`:** Used for installing and managing dependencies across the monorepo.
- **`turbo`:** Used for orchestrating build, dev, test, and lint tasks across the monorepo (`turbo.json`).
- **`git`:** Version control.
- **VS Code:** Recommended editor (implied by `.vscode` settings if present).
- **Biome:** Used for linting and formatting code (`biome check`, `biome format`).
- **Drizzle Kit:** Used for generating and applying database migrations.
- **Vercel CLI:** Potentially used for deployments and environment management.