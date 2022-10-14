// Fixes: unable to load '*'
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      }
    }
  },
	viteFinal: (config, { configType }) => {
		if (configType === 'PRODUCTION') config.base = '/IgniteLab_DesignSystem/';
		return config;
	}
};