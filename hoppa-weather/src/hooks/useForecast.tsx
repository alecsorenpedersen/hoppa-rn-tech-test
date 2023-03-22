import { AxiosResponse } from 'axios';
import { ForecastResponse } from '../types';
import weatherApi from '../services/api/weatherApi';

export const getForecast = async (): Promise<
	AxiosResponse<ForecastResponse>
> => {
	const forecast = await weatherApi.get('/forecast.json', {
		params: {
			q: 'London',
			days: 7,
		},
	});

	return forecast;
};
