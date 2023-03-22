import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
	test('renders welcome message', () => {
		const { getByText } = render(<App />);
		const welcomeMessage = getByText('List');
		expect(welcomeMessage).toBeDefined();
	});
});
