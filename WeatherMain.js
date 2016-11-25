import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class WeatherMain extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
    		zip: ''
    	};
  	}

    _handleInputTextDidChanged(event) {
		this.setState({zip: event.nativeEvent.text});
	}

  	render() {
    	return (
     	 <View style={styles.container}>
     	   <Text style={styles.welcome}>
          	地区邮编： {this.state.zip}
     	   </Text>
     	   <TextInput style={styles.input} onSubmitEditing={(event) => this._handleInputTextDidChanged(event)}/>
    	 </View>
   	 );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
  	fontSize: 20,
  	borderWidth: 3,
  	height: 44,
  }
});