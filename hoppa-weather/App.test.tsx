import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
	test('renders welcome message', () => {
		const { getByText } = render(<App />);
		const welcomeMessage = getByText(
			'Open up App.tsx to start working on your app!',
		);
		expect(welcomeMessage).toBeDefined();
	});
});
