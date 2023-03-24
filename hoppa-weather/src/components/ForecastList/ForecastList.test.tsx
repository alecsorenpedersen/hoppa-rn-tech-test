import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Forecast } from '../../types/types';
import ForecastListItem from './ForecastList';

const mockOnPressHandler = jest.fn();

const mockForecast: Forecast = {
	date: '2023-03-24',
	day: {
		maxtemp_c: 10,
		maxtemp_f: 50,
		mintemp_c: 5,
		mintemp_f: 41,
		avgtemp_c: 7.5,
		avgtemp_f: 45.5,
		daily_chance_of_rain: 20,
		condition: {
			text: 'Sunny',
			icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
			code: 1000,
		},
		uv: 3,
	},
};

describe('ForecastListItem', () => {
	it('renders correctly', () => {
		const { getByTestId, getByText } = render(
			<ForecastListItem
				item={mockForecast}
				index={0}
				onPressHandler={mockOnPressHandler}
			/>,
		);

		expect(getByTestId('forecast-icon')).toBeTruthy();
		expect(getByText('Sunny')).toBeTruthy();
		expect(getByText('min 5°C')).toBeTruthy();
		expect(getByText('max 10°C')).toBeTruthy();
		expect(getByText('20%')).toBeTruthy();
	});

	it('triggers onPressHandler when pressed', () => {
		const { getByTestId } = render(
			<ForecastListItem
				item={mockForecast}
				index={0}
				onPressHandler={mockOnPressHandler}
			/>,
		);

		fireEvent.press(getByTestId('forecast-list-item'));
		expect(mockOnPressHandler).toHaveBeenCalledTimes(1);
	});
});
