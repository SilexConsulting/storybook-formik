export default {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', './local-presets.js', '@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
