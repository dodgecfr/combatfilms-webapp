# Project Brief: Combat Films & Research Web Platform

This document outlines the core requirements, goals, and scope for the Combat Films & Research (CFR) web platform. It serves as the foundational guide for the project.

## Core Requirements
- Develop a modern web application to showcase and distribute CFR's documentaries, books, and other media.
- Implement an e-commerce store for selling physical media (DVDs) and potentially digital access/streaming.
- Provide information about Combat Films & Research, its history, services, and work.
- Ensure the platform is performant, user-friendly, and maintainable.
- Integrate payment processing (e.g., PayPal) for purchases.

## Goals
- Establish a professional online presence for Combat Films & Research.
- Increase visibility and accessibility of CFR's documentary catalog.
- Generate revenue through online sales and streaming access.
- Serve as a central hub for information about CFR's projects and activities.

## Scope
- **Frontend:** Next.js web application (`apps/web/`) including:
    - Marketing pages (Home, About, Contact, Our Work)
    - E-commerce store with product browsing, search, and detail pages.
    - User authentication (likely via Clerk, based on `apps/web/src/lib/clerk.ts`).
    - Checkout process with payment integration.
    - Potential video streaming capabilities.
- **Backend:** Node.js API (`apps/api/`) handling:
    - Order processing
    - Payment integration (webhooks, service calls)
    - Content management (posts, potentially product data)
    - User data management (if applicable beyond Clerk)
- **Database:** Data persistence (`packages/db/`) for products, orders, users, etc. (Specific DB likely PlanetScale/Drizzle based on config).
- **Deployment:** Likely Vercel (based on `vercel.json` files).
- **Data:** Integration of existing documentary and product data, potentially scraped or manually imported (`scripts/`).

## Notes
- This project involves migrating/integrating data from an older website (`combatfilms.com`).
- The project uses a monorepo structure managed by `pnpm` and `turbo`.