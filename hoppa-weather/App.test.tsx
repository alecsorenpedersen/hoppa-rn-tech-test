import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('<App />', () => {
	it('should render update location button', () => {
		const { getByText } = render(<App />);
		const locationInputButton = getByText('Update Location');
		expect(locationInputButton).toBeDefined();
	});
});
