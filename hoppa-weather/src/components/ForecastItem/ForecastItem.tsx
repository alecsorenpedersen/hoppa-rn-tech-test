import { ForecastItemProps } from '../../types';
import {
	ForecastImage,
	ForecastItemContainer,
	HeadlineText,
	RainText,
	TemperatureText,
} from './ForecastItem.styles';

const ForecastItem = ({
	imageUri,
	headLine,
	min,
	max,
	rain,
}: ForecastItemProps) => {
	return (
		<ForecastItemContainer>
			<ForecastImage source={{ uri: imageUri }} testID={`image-${imageUri}`} />
			<HeadlineText>{headLine}</HeadlineText>
			<TemperatureText>{`min ${Math.round(min)}°C  max ${Math.round(
				max,
			)}°C`}</TemperatureText>
			<RainText>{`${rain}% chance of rain`}</RainText>
		</ForecastItemContainer>
	);
};

export default ForecastItem;
