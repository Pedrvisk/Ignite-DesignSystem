import { themes } from '@storybook/theming';

// Fixes: not load tailwind css in preview
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	docs: {
		theme: themes.dark
	}
}