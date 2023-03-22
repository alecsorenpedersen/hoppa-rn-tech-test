import { createContext, useContext, useState, useEffect } from 'react';
import { Forecast, WeatherContextValue, WeatherProviderProps } from '../types';
import { getForecast } from '../hooks/useForecast';

const WeatherContext = createContext<WeatherContextValue>({
	forecast: undefined,
	error: false,
});

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
	const [forecast, setForecast] = useState<Forecast[]>();
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const getForecastList = async () => {
			await getForecast()
				.then((res) => setForecast(res.data.forecast.forecastday))
				.catch((err) => setError(true));
		};

		getForecastList();
	}, []);

	return (
		<WeatherContext.Provider value={{ forecast, error }}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeather = () => useContext(WeatherContext);
