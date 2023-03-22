module.exports = {
	preset: 'react-native',
	setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
	transform: {
		'^.+\\.tsx?$': 'babel-jest',
	},
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|expo(-[\\w]+)?|@?react-navigation|@?react-(native|community|async-storage)))',
	],
};
