# Risky Fajita Boilerplate

Click `Use this template` button at the header of repository. Note that you have to be logged in to GitHub to generate template.

## Features

This template comes with several essential features (initially from the fanastic Mantine NextJS boilerplate):

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

and some extra RiskyFajita Bonus features:
- Preconfigured responsive app wrapper with examples preset
- Simple globalConfig object for cascading names
- Configured light/dark theme switching
- Cypress e2e tests and component level tests
- Component performance tests with reassure
- Pre-configured github actions template for CI/CD purposes 

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
