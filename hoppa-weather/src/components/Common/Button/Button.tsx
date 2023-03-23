import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '../../../types';

const Button = ({ onPress, title, label }: ButtonProps) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};
export default Button;
