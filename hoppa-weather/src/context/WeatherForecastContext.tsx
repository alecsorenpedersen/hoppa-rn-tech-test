import { createContext, useContext, useState, useEffect } from 'react';
import { Forecast, WeatherContextValue, WeatherProviderProps } from '../types';
import { getForecast } from './getWeatherForecast';

const WeatherContext = createContext<WeatherContextValue>({
	forecast: undefined,
	error: false,
	updateLocation: () => Promise.resolve(),
	loading: false,
});

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
	const [forecast, setForecast] = useState<Forecast[]>();
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getForecastList = async () => {
			await getForecast('London', 9)
				.then((res) => setForecast(res.data.forecast.forecastday))
				.catch((err) => setError(true));
		};

		getForecastList();
	}, []);

	const updateLocation = async (location: string) => {
		setError(false);
		setLoading(true);
		try {
			const res = await getForecast(location, 9);
			setForecast(res.data.forecast.forecastday);
		} catch (err) {
			setError(true);
		}
		setLoading(false);
	};

	return (
		<WeatherContext.Provider
			value={{ forecast, error, updateLocation, loading }}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeather = () => useContext(WeatherContext);
