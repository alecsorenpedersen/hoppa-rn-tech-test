import axios from 'axios';
import { getForecast } from './getWeatherForecast';
import weatherApiOriginal from '../services/api/weatherApi';

jest.mock('../services/api/weatherApi', () => ({
	get: jest.fn(),
}));

const weatherApi = weatherApiOriginal as jest.Mocked<typeof weatherApiOriginal>;

describe('Weather Api', () => {
	beforeEach(() => {
		weatherApi.get.mockClear();
	});

	const mockForecastResponse = {
		data: {
			forecast: {
				forecastday: [
					{
						date: '2023-03-25',
						day: {
							maxtemp_c: 10,
							mintemp_c: 5,
							avgtemp_c: 7.5,
							condition: {
								text: 'Partly cloudy',
							},
						},
					},
					{
						date: '2023-03-26',
						day: {
							maxtemp_c: 12,
							mintemp_c: 6,
							avgtemp_c: 9,
							condition: {
								text: 'Sunny',
							},
						},
					},
				],
			},
		},
	};

	it('should fetch the forecast data with default location and days', async () => {
		weatherApi.get.mockResolvedValue(mockForecastResponse);

		const forecast = await getForecast();

		expect(weatherApi.get).toHaveBeenCalledWith('/forecast.json', {
			params: {
				q: 'London',
				days: 7,
			},
		});

		expect(forecast).toEqual(mockForecastResponse);
	});

	it('should fetch the forecast data with custom location and days', async () => {
		weatherApi.get.mockResolvedValue(mockForecastResponse);

		const customLocation = 'New York';
		const customDays = 3;

		const forecast = await getForecast(customLocation, customDays);

		expect(weatherApi.get).toHaveBeenCalledWith('/forecast.json', {
			params: {
				q: customLocation,
				days: customDays,
			},
		});

		expect(forecast).toEqual(mockForecastResponse);
	});

	it('should throw an error when the API call fails', async () => {
		const mockError = new Error('API call failed');
		weatherApi.get.mockRejectedValue(new Error(mockError.message));

		const customLocation = 'Invalid location';
		const customDays = 3;

		await expect(getForecast(customLocation, customDays)).rejects.toThrow(
			mockError,
		);

		expect(weatherApi.get).toHaveBeenCalledWith('/forecast.json', {
			params: {
				q: customLocation,
				days: customDays,
			},
		});
	});
});
