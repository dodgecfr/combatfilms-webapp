# Active Context: Initial Setup & Analysis (April 7, 2025)

Tracks the current work focus, recent changes, next steps, active decisions, important patterns, and project insights. This reflects the state after initial project analysis and Memory Bank creation.

## Current Work Focus
- Initial project analysis based on file structure and content search.
- Creation and initial population of the core Memory Bank files (`projectbrief.md`, `productContext.md`, `activeContext.md`, `systemPatterns.md`, `techContext.md`, `progress.md`).

## Recent Changes
- Created the six core Memory Bank markdown files.
- Updated `projectbrief.md` and `productContext.md` with details derived from project analysis.
- Updated this file (`activeContext.md`) to reflect the current setup phase.

## Next Steps
- Update `systemPatterns.md` based on observed architecture (Next.js frontend, Node API, PlanetScale/Drizzle DB).
- Update `techContext.md` with identified technologies (TypeScript, React, Next.js, Node.js, pnpm, turbo, Clerk, PayPal, Vercel).
- Update `progress.md` to reflect the initial state (foundational structure exists, content population ongoing).
- Further investigate specific implementation details (e.g., payment flow, video streaming integration, data models).

## Active Decisions & Considerations
- **Data Source:** Confirming how product data (documentaries, books) is managed - primarily via static files (`apps/web/src/app/(marketing)/store/_data/`) or also involving the database.
- **Streaming Implementation:** How is video streaming handled? (Direct Vimeo links, custom player, etc.)
- **Authentication Flow:** Details of Clerk integration and user roles/permissions.
- **Payment Flow:** Specifics of PayPal integration (client-side button vs. server-side API calls).

## Important Patterns & Preferences
- **Monorepo:** Project uses `pnpm` workspaces and `turbo` for managing multiple packages/apps.
- **TypeScript:** Predominantly used across frontend, backend, and shared packages.
- **Next.js App Router:** The frontend (`apps/web/`) appears to use the App Router structure.
- **Shadcn/ui:** UI components seem to be based on `shadcn/ui` (`apps/web/src/components/ui/`).
- **Memory Bank:** Adherence to the Memory Bank structure and workflow is critical.

## Learnings & Project Insights
- The project is a rebuild/modernization of the Combat Films & Research online presence, focusing on content distribution and sales.
- Significant effort has gone into data migration/scraping from the old site.
- The technical stack is modern (Next.js, TypeScript, Vercel).