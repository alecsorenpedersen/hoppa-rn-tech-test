import { FlatList } from 'react-native';
import { Forecast } from '../../types/types';
import { useWeather } from '../../context/WeatherForecastContext';
import ForecastListItem from '../../components/ForecastList';
import Separator from '../../components/Common/Separator/';
import { useNavigation } from '@react-navigation/native';
import ErrorBox from '../../components/Common/ErrorBox/ErrorBox';

export const ListScreen = () => {
	const navigation = useNavigation();
	const { forecast, error } = useWeather();

	const onPressHandler = (item: Forecast) => {
		navigation.navigate('Detail', {
			title: `${new Date(item.date).toDateString()}`,
			imageUri: `https:${item.day.condition.icon}`,
			headLine: item.day.condition.text,
			min: item.day.mintemp_c,
			max: item.day.maxtemp_c,
			rain: item.day.daily_chance_of_rain,
		});
	};

	const renderItem = ({ item, index }: { item: Forecast; index: number }) => (
		<ForecastListItem
			item={item}
			index={index}
			onPressHandler={() => onPressHandler(item)}
		/>
	);

	return (
		<>
			{error ? (
				<ErrorBox message={'Oops! Something went wrong!'} />
			) : (
				<FlatList
					data={forecast}
					renderItem={renderItem}
					keyExtractor={(item) => item.date}
					ItemSeparatorComponent={Separator}
					testID={'forecast-list'}
				/>
			)}
		</>
	);
};

export default ListScreen;
