import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Configuration } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  // webpackFinal: async (config: Configuration) => {
  //   // Ensure config.module exists and has rules
  //   if (config.module) {
  //     if (!config.module.rules) {
  //       config.module.rules = [];
  //     }

  //     // Add TypeScript support with ts-loader
  //     config.module.rules.push({
  //       test: /\.css$/,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         {
  //           loader: "postcss-loader",
  //           options: {
  //             postcssOptions: {
  //               plugins: [require("tailwindcss"), require("autoprefixer")],
  //             },
  //           },
  //         },
  //       ],
  //       include: /src/,
  //     },{
  //       test: /\.tsx?$/,  // Match TypeScript files
  //       use: [
  //         {
  //           loader: 'ts-loader',
  //           options: {
  //             transpileOnly: true,  // Skip type checking for faster builds
  //           },
  //         },
  //       ],
  //     });
  //   }

  //   // Return the modified config
  //   return config;
  // },
};

export default config;