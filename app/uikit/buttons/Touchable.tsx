import React, { ReactNode } from 'react';
import {
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	View,
	StyleProp,
	ViewStyle,
} from 'react-native';

type Props = {
	style?: StyleProp<ViewStyle>;
	children: ReactNode;
	onPress?: () => void;
};

const TouchView: any = Platform.select<any>({
	ios: TouchableOpacity,
	android: TouchableNativeFeedback,
});

export default function Touchable({ style, children, onPress }: Props) {
	return (
		<View style={[style, { overflow: 'hidden' }]}>
			<TouchView onPress={onPress} style={{ flex: 1 }}>
				{children}
			</TouchView>
		</View>
	);
}
