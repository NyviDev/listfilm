import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "gray",
      values: [
        {
          name: "offWhite",
          value: "#f7f7f7",
        },
        {
          name: "gray",
          value: "#e4e4e4",
        },
        {
          name: "black",
          value: "#393939",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
