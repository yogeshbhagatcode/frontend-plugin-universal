import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';
import { GlobalHeaderBanner } from './components/GlobalHeaderBanner';
import { GlobalFooter } from './components/GlobalFooter';

/**
 * Universal plugin slots configuration.
 * Can be imported directly into env.config.jsx or registered via Tutor PLUGIN_SLOTS.
 */
export const universalPluginSlots = {
  // Universal footer across standard MFEs
  'org.openedx.frontend.layout.footer.v1': {
    keepDefault: false,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Replace,
        widgetId: 'default_contents',
        widget: {
          id: 'universal-footer-plugin',
          type: DIRECT_PLUGIN,
          priority: 1,
          RenderWidget: GlobalFooter,
        },
      },
    ],
  },

  // Universal header banner across standard MFEs
  'org.openedx.frontend.layout.header.v1': {
    keepDefault: true,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Insert,
        widget: {
          id: 'universal-header-banner-plugin',
          type: DIRECT_PLUGIN,
          priority: 1,
          RenderWidget: GlobalHeaderBanner,
        },
      },
    ],
  },

  // Authoring (Studio) footer
  'org.openedx.frontend.layout.studio_footer.v1': {
    keepDefault: false,
    plugins: [
      {
        op: PLUGIN_OPERATIONS.Replace,
        widgetId: 'default_contents',
        widget: {
          id: 'universal-studio-footer-plugin',
          type: DIRECT_PLUGIN,
          priority: 1,
          RenderWidget: GlobalFooter,
        },
      },
    ],
  },
};

