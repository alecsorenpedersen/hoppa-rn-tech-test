// ForecastListItem.styles.ts
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	padding-bottom: 8px;
	padding-top: 12px;
	align-items: center;
`;

export const Icon = styled.Image`
	width: 50px;
	height: 50px;
	margin-right: 4px;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
`;

export const TextContainer = styled.View`
	justify-content: center;
`;

export const ConditionText = styled.Text`
	font-size: 16px;
`;

export const TempRow = styled.View`
	flex-direction: row;
	margin-top: 2px;
`;

export const TempText = styled.Text`
	font-size: 12px;
	width: 60px;
`;

export const ChanceOfRainContainer = styled.View`
	justify-content: center;
	align-items: center;
	padding-right: 10px;
`;

export const ChanceOfRainText = styled.Text`
	font-size: 16px;
`;

export const ChanceOfRainLabelText = styled.Text`
	font-size: 8px;
`;
