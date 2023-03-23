import axios from 'axios';
import { WEATHER_API_KEY } from '@env';

const weatherApi = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	params: {
		key: WEATHER_API_KEY,
	},
});

export default weatherApi;
