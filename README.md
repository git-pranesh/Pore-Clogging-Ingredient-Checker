# Pore-Clogging Ingredient Checker

A web tool that scans skincare product ingredient lists and flags comedogenic (pore-clogging) ingredients.

Live: https://pore-clogging-ingredient-checker.vercel.app

## What it does

Paste the ingredient list from any skincare product and the tool checks each ingredient against a comedogenic database. Results show which ingredients are known to clog pores, along with their comedogenic rating (0–5 scale).

Useful for anyone dealing with acne-prone skin who wants to vet products before buying.

## Stack

- React
- TypeScript
- Vercel (deployment)
- Built on Replit

## Project structure

```
artifacts/        Data files and ingredient database
lib/              Core matching and lookup logic
scripts/          Build and utility scripts
attached_assets/  Static assets
```

## Running locally

```bash
pnpm install
pnpm run dev
```
