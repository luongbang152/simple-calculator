import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ParamList } from './ParamList';
import Screens from './Screens';

const Stack = createStackNavigator<ParamList>();

export default function AppStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{Object.keys(Screens).map((key) => {
				const Screen = Screens[key];
				return (
					<Stack.Screen
						key={Screen.name}
						name={Screen.name}
						component={Screen.component()}
						options={Screen.options}
					/>
				);
			})}
		</Stack.Navigator>
	);
}
