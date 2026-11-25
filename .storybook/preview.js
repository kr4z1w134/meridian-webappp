// Storybook Preview Configuration
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    // Note: If you have any ui-kit theme imports here, they may need updating
    // but the issue specifically mentions stories, not config
  },
};