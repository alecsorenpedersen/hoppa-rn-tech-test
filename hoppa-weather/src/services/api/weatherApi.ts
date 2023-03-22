import axios from 'axios';

const WEATHER_API_KEY = '00bd9ebd6c674b3c834202053232003';

const weatherApi = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	params: {
		key: WEATHER_API_KEY,
	},
});

export default weatherApi;
