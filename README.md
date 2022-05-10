# [![Sia Web](https://sia.tech/banners/sia-banner-web.png)](http://sia.tech)

# Web

Web packages for the Sia project and ecosystem.

## Apps

- [Website](apps/website) - The main [sia.tech](https://sia.tech) website with information on the Sia project and the Sia Foundation.
- [Asset Server](apps/asset-server) - Powers [api.sia.tech](https://api.sia.tech) and all downloadable assets on [sia.tech](https://sia.tech) such as the Sia software releases.
- [Design](apps/design-site) - The [design.sia.tech](https://design.sia.tech) website for exploring the design system used across Sia apps and websites.

## Libraries

- [@siafoundation/sia-js](libs/sia-js) - Core Sia types and library methods.
- [@siafoundation/sia-react](libs/sia-react) - React hooks for interacting with `siad`.
- [@siafoundation/sia-nodejs](libs/sia-nodejs) - Sia NodeJS client for controlling `siad`.
- [@siafoundation/design-system](libs/design-system) - React-based design system used across Sia apps and websites.
- [@siafoundation/data-sources](libs/data-sources) - Data sources used for stats on the website.
- [@siafoundation/env](libs/env) - Environment variables for the website server configuration.

# Development

## Setup

1. The Sia Web codebase is managed with the [Nx](https://nx.dev) build system. Either install `nx` globally via `npm install -g nx` or use `npx` to invoke commands.
2. Install dependencies with `npm install`.

### Env configuration

```sh
# Create a local .env
cp .env.example .env
```

### Workflows

- [Sia release process →](https://www.notion.so/siafoundation/Web-6de3b72ac13e44a989bdffb72fce8996#bd5cb0ab038d4b35a49d4433dd6af614)
- [News release process →](https://www.notion.so/siafoundation/Web-6de3b72ac13e44a989bdffb72fce8996#4fc04d6e7c0749cfa6a99c6a83fc41bd)

## Tooling

The following examples outline how to use common `nx` commands.

## Development server

Run `nx serve <app>` for a dev server.

## Code scaffolding

Run `nx g @nrwl/react:component <component> --project=<project>` to generate a new component. Review the `nx` documentation for many more examples.

## Build

Run `nx build <project>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test <project>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e <app>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand the workspace

Run `nx dep-graph` to see a diagram of project dependencies.
