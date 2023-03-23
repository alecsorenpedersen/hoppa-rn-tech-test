import { AxiosResponse } from 'axios';
import { ForecastResponse } from '../types';
import weatherApi from '../services/api/weatherApi';

type Location = string;

export const getForecast = async (
	location: Location = 'London',
	days: number = 7,
): Promise<AxiosResponse<ForecastResponse>> => {
	const forecast = await weatherApi.get('/forecast.json', {
		params: {
			q: location,
			days: days,
		},
	});

	return forecast;
};
