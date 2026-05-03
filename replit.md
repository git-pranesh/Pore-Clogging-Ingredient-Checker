# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- `artifacts/api-server` — Express API server.
- `artifacts/mockup-sandbox` — design canvas / component preview server.
- `artifacts/pore-checker` — Pore Clogging Ingredient Checker static site (React + Vite + react-router-dom v7 + react-helmet-async). Sage `#84a98c` + pink `#f4a261`. Routes: `/`, `/comedogenic-ingredients-list`, six `/comedogenic-rating-{0..5}` filter pages, 60 `/is-{slug}-comedogenic` ingredient detail pages, and 5 long-form guides at root paths. Database in `src/data/comedogenicDatabase.ts` (~199 ingredients) + `src/data/ingredientPages.ts` (60 long-form pages with what/how/why + 5 FAQs each). SEO via `src/lib/seo.ts` + `src/components/SeoHead.tsx` — emits og/twitter tags plus WebSite+SearchAction, WebApplication, Article, FAQPage, BreadcrumbList, and ItemList JSON-LD. `scripts/build-static.mts` regenerates `public/sitemap.xml` and `public/llms.txt` on prebuild.
