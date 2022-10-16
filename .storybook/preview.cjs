import { initialize, mswDecorator } from 'msw-storybook-addon';
import { themes } from '@storybook/theming';

// Fixes: not load tailwind css in preview
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

// Stories: Init Mock API
initialize({
	onUnhandledRequest: 'bypass'
});

// Stories: Preview
export const decorators = [mswDecorator];
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