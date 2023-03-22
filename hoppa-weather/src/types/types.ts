export type ButtonProps = {
	onPressHandler: () => void;
	label: string;
};

export type DayForecast = {
	maxtemp_c: number;
	maxtemp_f: number;
	mintemp_c: number;
	mintemp_f: number;
	avgtemp_c: number;
	avgtemp_f: number;
	daily_chance_of_rain: number;
	condition: {
		text: string;
		icon: string;
		code: number;
	};
	uv: number;
};

export type Forecast = {
	date: string;
	date_epoch: number;
	day: DayForecast;
	astro: Record<string, unknown>;
	hour: Record<string, unknown>[];
};

export type ForecastResponse = {
	current: Record<string, unknown>;
	forecast: {
		forecastday: Forecast[];
	};
	location: Record<string, unknown>;
};

import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
	List: undefined;
	Detail: DetailScreenNavProps;
};

export type DetailScreenNavProps = {
	title: string;
	imageUri: string;
	headLine: string;
	min: number;
	max: number;
	rain: number;
};

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type ForecastListItemProps = {
	item: Forecast;
	index: number;
	onPressHandler: () => void;
};

export interface ErrorBoxProps {
	message: string;
}

export interface ForecastItemProps {
	imageUri: string;
	headLine: string;
	min: number;
	max: number;
	rain: number;
}

export interface WeatherContextValue {
	forecast: Forecast[] | undefined;
	error: boolean;
}

export interface WeatherProviderProps {
	children: React.ReactNode;
}
