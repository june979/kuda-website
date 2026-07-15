# replit.md

## Overview

This is a Korean-language informational website for **전국중고차딜러협동조합 (KUDA - Korea Usedcar Dealers Association)**, a cooperative organization representing used car dealers across South Korea. The site serves as a landing page presenting the organization's mission, background, core roles, benefits for partners, their "DealerPass" digital platform, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll-triggered and entrance animations
- **Build Tool**: Vite with React plugin

The frontend is a single-page application with multiple sections (hero, intro, background, role, benefits, dealerpass, contact) that are navigated via smooth scrolling. The design supports both light and dark modes through CSS variables.

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express static middleware serves the built frontend in production

The server follows a modular structure:
- `server/index.ts` - Express app setup and middleware
- `server/routes.ts` - API route registration
- `server/storage.ts` - Data access layer (currently in-memory implementation)
- `server/vite.ts` - Vite dev server integration for development
- `server/static.ts` - Static file serving for production

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Implementation**: In-memory storage (`MemStorage` class) as a placeholder

The schema currently defines a basic `users` table with id, username, and password fields. The storage interface (`IStorage`) is designed to be swapped between in-memory and database implementations.

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production Build**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server code to `dist/index.cjs`
- **Database Migrations**: Drizzle Kit with `db:push` command

## External Dependencies

### Database
- **PostgreSQL**: Required for production (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI/Frontend Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **embla-carousel-react**: Carousel component
- **react-day-picker**: Calendar/date picker
- **recharts**: Charting library
- **cmdk**: Command palette component
- **vaul**: Drawer component

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Dev tooling (dev only)
  - `@replit/vite-plugin-dev-banner` - Dev banner (dev only)

### Fonts
- **Google Fonts**: Noto Sans KR (Korean), Inter, Plus Jakarta Sans (loaded via CDN)