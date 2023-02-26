<p align="center">
  <img src="public/logo_dark.svg" />
</p>

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
- Automated component generation with [generate-react-cli](https://www.npmjs.com/package/generate-react-cli)

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

## Components Structure

Each component has the following structure that you can ammend to your liking:
  - `index.ts` - exports component itself, and contains the TS types for the props
  - `-.cy.tsx` - component cypress tests
  - `-.perf-test.tsx` - component performance tests
  - `-.story.tsx` - component storybook stories
  - `-.test.tsx` - component unit tests in Jest with React Testing Library
  - `-.styles.ts` - component styles

You can make changes to the component structure in the `generate-react-cli` config file, or by ammending the templates in the `.templates` folder.

## npm scripts

### Custom RiskyFajita commands
- `npx generate-react-cli component` - generates a new react component in the component structure using [generate-react-cli](https://www.npmjs.com/package/generate-react-cli)

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
- `e2e` - runs cypress e2e tests
- `components` - runs cypress component tests
- `e2e:headless` - runs cypress e2e tests in headless mode
- `components:headless` - runs cypress component tests in headless mode
- `reassure` - runs reassure performance tests

### Other scripts
- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
