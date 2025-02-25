// CONFIG
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-onboarding", "@storybook/addon-links", "@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions"],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    staticDirs: ["../public"],
};

// EXPORTS
export default config;
