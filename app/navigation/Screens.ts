import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

import { Splash, Calculator } from 'modules/app';

import { ParamList } from './ParamList';

/**
 * Định nghĩa các screens trong app
 * Yêu cầu:
 * - Định nghĩa các param trong ParamList
 */

const Screens: {
	[key: string]: {
		name: keyof ParamList;
		component: () => React.ComponentType<any>;
		options?: StackNavigationOptions;
	};
} = {
	/**
	 * App
	 */
	Splash: {
		name: 'Splash',
		component: () => {
			return Splash;
		},
	},
	Calculator: {
		name: 'Calculator',
		component: () => {
			return Calculator;
		},
	},
};

export default Screens;
