# Changelog

## 9/23

- New assets: National Park Service logo, and an NPS-inspired font
- New dependencies: React Query and Styled Components

## 9/20 Afternoon

- Finished top-level routing
- Defined types for the application
- Decided to focus on US National Parks as Destinations

## Post npm create, before GitHub check-in

- package.json
  - Added libraries for routing, Jest, testing-library and others
  - Rewrote `scripts` as follows:

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "format": "prettier . --check",
    "format:write": "prettier . --write",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "preview": "vite preview",
    "test": "jest --watch",
    "test:once": "jest",
    "tsc": "tsc -p tsconfig.json"
  }
```

- Prettier
  - Added .prettierignore
  - Added .prettierrc.json
  - Copied from `react-app`
- Project configuration
  - Added an `.npmrc` which controls where dependencies are loaded from
  - Added an `.nvmrc` which suggests to NVM which version to use
  - Created from scratch
- Jest
  - Added `jest.config.js`
  - Added `__mocks__/styleMock.js`
  - Both copied from our `react-app` project
- Deleted unnecessary files, mostly \*.svg images we won't use
- Application
  - App.tsx: Wiped out most of it, since we want our own app
  - index.html: Changed the title
  - Removed dependencies on other CSS files
