<p align="center">
  <img src="public/logo_dark.svg" />
</p>

[![Dependency Checks](https://github.com/risky-fajita/risky-boilerplate/actions/workflows/dependency-review.yml/badge.svg?branch=master)](https://github.com/risky-fajita/risky-boilerplate/actions/workflows/dependency-review.yml)

[![Tests](https://github.com/risky-fajita/risky-boilerplate/actions/workflows/CI.yml/badge.svg)](https://github.com/risky-fajita/risky-boilerplate/actions/workflows/CI.yml)

# Risky Fajita Boilerplate

A boilerplate for building Mantine based apps with NextJS, Storybook, Jest, Cypress, and Reassure. Opinionated, but with a lot of flexibility to get you going quicker.

Click `Use this template` button at the header of repository. Note that you have to be logged in to GitHub to generate template.

## Features

This template comes with several essential features (initially from the fanastic Mantine NextJS boilerplate):

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

and some extra RiskyFajita Bonus features:

App:
- Preconfigured responsive app wrapper with examples preset
- Simple globalConfig object for cascading names
- Configured light/dark theme switching

Testing:
- Cypress e2e and component level tests
- Component performance tests with reassure (providing MR comments on performance regressions)
- Pre-configured github actions template that
    - Runs tests on MRs against master
    - Deploys storybook to github pages on merge to master

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
