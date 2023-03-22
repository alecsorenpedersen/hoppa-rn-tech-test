import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/ForecastListScreen/';
import DetailScreen from './src/screens/ForecastDetailScreen/';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='List'>
				<Stack.Screen name='List' component={ListScreen} />
				<Stack.Screen name='Detail' component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
