import React from 'react';
import {
	NavigationContainer,
	NavigationContainerRef,
} from '@react-navigation/native';

import Navigator from './Navigator';
import AppStack from './AppStack';

const AppContainer = () => (
	<NavigationContainer
		ref={(navigationRef: NavigationContainerRef) => {
			Navigator.initialize(navigationRef);
		}}
		onStateChange={Navigator.handleStateChanged}>
		<AppStack />
	</NavigationContainer>
);

export default AppContainer;
