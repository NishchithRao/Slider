const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/**/src/**/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  }
};
