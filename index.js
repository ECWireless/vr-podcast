import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Hello360 extends React.Component {
  state = {
  };
  
  render() {
    return (
      <View style={styles.panel}>
			<VrButton
				onClick={this._incrementCount}
				style={styles.greetingBox}>
			<Text style={styles.greeting}>
				Play Podcast
			</Text>
			</VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
	panel: {
		// Fill the entire surface
		width: 1000,
		height: 600,
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	greetingBox: {
		padding: 20,
		backgroundColor: '#8dcbc0',
		borderColor: '#b6ce61',
		borderWidth: 2,
	},
	greeting: {
		fontSize: 30,
	},
});

AppRegistry.registerComponent('Hello360', () => Hello360);
