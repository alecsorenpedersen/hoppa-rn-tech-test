import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '../../../types';

const Button = ({ onPressHandler, label }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPressHandler}>
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};
export default Button;
