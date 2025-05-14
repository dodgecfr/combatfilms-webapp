# System Patterns: Combat Films Platform

Documents the system architecture, key technical decisions, design patterns, component relationships, and critical implementation paths for the Combat Films & Research web platform.

## System Architecture
- **Monorepo:** The project utilizes a monorepo structure managed by `pnpm` and `turbo`, containing separate applications (`apps/web`, `apps/api`) and shared packages (`packages/db`, `packages/id`, etc.).
- **Frontend:** A Next.js application (`apps/web`) using the App Router, likely deployed on Vercel. It handles user interface, client-side interactions, and data fetching from the API. Uses React Server Components (RSC) and Client Components.
- **Backend:** A Node.js API (`apps/api`) built with Hono (inferred from `index.ts` likely usage, needs confirmation) or a similar framework, responsible for business logic, database interactions, and handling requests from the frontend. Likely deployed as serverless functions on Vercel.
- **Database:** A relational database (likely PlanetScale based on common Vercel stack patterns, needs confirmation) accessed via Drizzle ORM (`packages/db`). Manages data for products, orders, users, etc.
- **Authentication:** Handled by Clerk (`apps/web/src/lib/clerk.ts`), managing user sign-up, sign-in, and session management.
- **Payments:** Integrated with PayPal (`apps/web/src/components/paypal-button.tsx`, `apps/api/src/modules/payments/`), likely handling checkout and potentially webhooks for payment confirmation.

## Key Technical Decisions
- **Monorepo:** Centralizes code management, simplifies dependency sharing, and streamlines build/deployment processes.
- **Next.js App Router:** Leverages modern React features like Server Components for improved performance and developer experience.
- **TypeScript:** Ensures type safety and improves code maintainability across the codebase.
- **Drizzle ORM:** Provides a type-safe SQL query builder for database interactions.
- **Clerk:** Offloads complex authentication logic to a third-party service.
- **Vercel:** Chosen platform for deployment, offering seamless integration with Next.js and serverless functions.
- **Shadcn/ui:** Provides a foundation for UI components, allowing for customization.

## Design Patterns in Use
- **Monorepo Pattern:** Managing multiple related projects within a single repository.
- **API Routes (Next.js/Hono):** Backend endpoints defined within the framework structure.
- **Server Components & Client Components (Next.js):** Separating rendering logic for performance optimization.
- **ORM (Drizzle):** Abstracting database interactions.
- **Environment Variables:** Managing configuration secrets (`.env` files mentioned).
- **Utility Classes (Tailwind CSS):** Styling the frontend application.
- **Provider Pattern (React Context):** Used for managing global state like themes (`ThemeProvider`), query caching (`QueryProvider`), etc. (`apps/web/src/providers/`).

## Component Relationships
- `apps/web` (Frontend) communicates with `apps/api` (Backend) for data and operations.
- `apps/api` interacts with `packages/db` (Database Layer) for data persistence.
- `apps/web` integrates with Clerk for authentication.
- `apps/web` and `apps/api` likely interact with PayPal for payment processing.
- Shared packages (`packages/id`, `packages/logs`) provide common utilities used by both `apps/web` and `apps/api`.

## Critical Implementation Paths
- **Product Display:** Fetching product data (documentaries, books) from `_data` files or DB and rendering product lists/details.
- **Checkout Flow:** Adding items to cart, initiating PayPal payment, handling payment confirmation (potentially via API webhook), creating orders in the DB.
- **User Authentication:** Sign-up/sign-in via Clerk, managing user sessions.
- **Data Migration/Import:** Scripts in `scripts/` suggest a critical path for importing data from the old system.