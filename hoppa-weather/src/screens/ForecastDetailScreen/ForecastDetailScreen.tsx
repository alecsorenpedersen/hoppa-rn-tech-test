import Button from '../../components/Common/Button';
import { DetailScreenRouteProp } from '../../types';
import ForecastItem from '../../components/ForecastItem';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const DetailScreen = () => {
	const navigation = useNavigation();
	const { params } = useRoute<DetailScreenRouteProp>();
	const { title, imageUri, headLine, min, max, rain } = params;

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<Button onPressHandler={navigation.goBack} label={'Back'} />
			),
			title,
		});
	}, []);

	return (
		<ForecastItem
			imageUri={imageUri}
			headLine={headLine}
			min={min}
			max={max}
			rain={rain}
		/>
	);
};

export default DetailScreen;
