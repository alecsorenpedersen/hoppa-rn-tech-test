import { ErrorBoxProps } from '../../../types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	ErrorBoxContainer,
	ErrorMessage,
	ScreenContainer,
} from './ErrorBox.styles';

const ErrorBox = ({ message }: ErrorBoxProps) => (
	<ScreenContainer>
		<ErrorBoxContainer>
			<Icon name='exclamation-circle' size={50} color='red' />
			<ErrorMessage>{message}</ErrorMessage>
		</ErrorBoxContainer>
	</ScreenContainer>
);

export default ErrorBox;
