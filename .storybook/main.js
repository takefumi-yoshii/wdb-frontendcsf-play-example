module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/preset-scss",
    "storybook-addon-pseudo-states",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};
