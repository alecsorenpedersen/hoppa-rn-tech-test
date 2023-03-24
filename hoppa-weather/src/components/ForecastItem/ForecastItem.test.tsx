import React from 'react';
import { render } from '@testing-library/react-native';
import ForecastItem from './ForecastItem';

describe('ForecastItem component', () => {
	const defaultProps = {
		imageUri: 'https://example.com/image.png',
		headLine: 'Partly Cloudy',
		min: 10.5,
		max: 20.5,
		rain: 40,
	};

	const setup = (props = defaultProps) => render(<ForecastItem {...props} />);

	it('displays the provided image with the correct source', () => {
		const { getByTestId } = setup();
		const image = getByTestId(`image-${defaultProps.imageUri}`);
		expect(image.props.source.uri).toBe(defaultProps.imageUri);
	});

	it('displays the provided headline text', () => {
		const { getByText } = setup();
		const headlineText = getByText(defaultProps.headLine);
		expect(headlineText).toBeTruthy();
	});
});
