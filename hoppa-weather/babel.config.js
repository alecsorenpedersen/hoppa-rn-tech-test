module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
		plugins: [
			'@babel/plugin-transform-modules-commonjs',
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
					safe: false,
					allowUndefined: true,
					verbose: false,
				},
			],
		],
	};
};
