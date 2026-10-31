# @openedx/frontend-plugin-universal

A universal frontend plugin for Open edX Micro-Frontends (MFEs), built with `@openedx/frontend-plugin-framework`.

## Overview
This package injects components into standard MFE plugin slots across all MFEs without requiring forks:
- **`GlobalHeaderBanner`**: Announcement/banner widget placed at the top of the header (`org.openedx.frontend.layout.header.v1`).
- **`GlobalFooter`**: Brand footer replacing the default footer across both standard MFEs (`org.openedx.frontend.layout.footer.v1`) and Studio (`org.openedx.frontend.layout.studio_footer.v1`).

## Build
```bash
npm install
npm run build
```

## Local Development
In your local MFE checkout, create `module.config.js`:
```javascript
module.exports = {
  localModules: [
    {
      moduleName: '@openedx/frontend-plugin-universal',
      dir: '../frontend-plugin-universal',
      dist: 'dist',
    },
  ],
};
```

