import { FlatList, TextInput, View } from 'react-native';
import { Forecast } from '../../types/types';
import { useWeather } from '../../context/WeatherForecastContext';
import ForecastListItem from '../../components/ForecastList';
import Separator from '../../components/Common/Separator/';
import { useNavigation } from '@react-navigation/native';
import ErrorBox from '../../components/Common/ErrorBox/ErrorBox';
import Button from '../../components/Common/Button';
import { useState } from 'react';
import styled from 'styled-components/native';

export const ListScreen = () => {
	const navigation = useNavigation();
	const { forecast, error, updateLocation } = useWeather();

	const [searchLocation, setSearchLocation] = useState('');

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

	const handleSearch = () => {
		updateLocation(searchLocation);
	};

	return (
		<ParentContainer>
			<ButtonsContainer>
				<SearchInput
					onChangeText={setSearchLocation}
					value={searchLocation}
					placeholder='Search for a location'
				/>
				<Button
					title='Search'
					onPress={handleSearch}
					label={'Update Location'}
				/>
			</ButtonsContainer>
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
		</ParentContainer>
	);
};

export default ListScreen;

const ParentContainer = styled.View`
	flex: 1;
`;

const SearchInput = styled.TextInput`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 10px;
	width: 100%;
	background-color: white;
`;

const ButtonsContainer = styled.View`
	align-items: center;
	padding: 10px;
`;
