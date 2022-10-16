// Fixes: unable to load '*'
module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y'
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
	},
	staticDirs: ['../public'],
	features: {
		interactionsDebugger: true
	}
};