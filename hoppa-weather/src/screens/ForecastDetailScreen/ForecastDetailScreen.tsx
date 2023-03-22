import { View } from 'react-native';
import Button from '../../components/Common/Button';
import ForecastItem from '../../components/ForecastItem';

const DetailScreen = () => {
	return (
		<View>
			<ForecastItem />
			<Button
				onPressHandler={function (): void {
					throw new Error('Function not implemented.');
				}}
				label={'Back'}
			/>
		</View>
	);
};
export default DetailScreen;
