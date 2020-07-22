module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./app'],
				extensions: ['.ios.js', '.android.js', '.js', '.json', '.ts', '.tsx'],
				alias: {
					res: './app/res',
					common: './app/common',
					config: './app/config',
					uikit: './app/uikit',
					schema: './app/schema',
					'app-redux': './app/app-redux',
				},
			},
		],
	],
};
