import {
	ChanceOfRainContainer,
	ChanceOfRainLabelText,
	ChanceOfRainText,
	ConditionText,
	Container,
	Icon,
	InfoContainer,
	TempRow,
	TempText,
	TextContainer,
} from './ForecastList.style';
import { ForecastListItemProps } from '../../types';

const ForecastListItem = ({
	item,
	index,
	onPressHandler,
}: ForecastListItemProps) => {
	const { maxtemp_c, mintemp_c, daily_chance_of_rain, condition } = item.day;
	const icon = `https:${condition.icon}`;

	return (
		<Container onPress={onPressHandler} testID={'forecast-list-item'}>
			<Icon source={{ uri: icon }} testID={'forecast-icon'} />
			<InfoContainer>
				<TextContainer>
					<ConditionText>{condition.text}</ConditionText>
					<TempRow>
						<TempText>{`min ${Math.round(mintemp_c)}°C`}</TempText>
						<TempText>{`max ${Math.round(maxtemp_c)}°C`}</TempText>
					</TempRow>
				</TextContainer>
				<ChanceOfRainContainer>
					<ChanceOfRainText>{`${daily_chance_of_rain}%`}</ChanceOfRainText>
					<ChanceOfRainLabelText>{'Chance of Rain'}</ChanceOfRainLabelText>
				</ChanceOfRainContainer>
			</InfoContainer>
		</Container>
	);
};

export default ForecastListItem;
