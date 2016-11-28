import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

import Forecast from './Forecast'

export default class WeatherMain extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
    		zip: '',
        forecast: {
          main: 'Snow',
          description: 'very cold',
          temp: 3
        }
    	}
  }

    _handleInputTextDidChanged(event) {
		this.setState({zip: event.nativeEvent.text});
	}

  	render() {
    	return (
     	 <View style={styles.container}>
        <Image source={require("./background.jpg")} resizeMode='cover' style={styles.background}>
          <View style={styles.overlay}>
         	   <Text style={styles.welcome}>
              	地区邮编： {this.state.zip}
         	   </Text>
         	   <TextInput style={styles.input} onSubmitEditing={(event) => this._handleInputTextDidChanged(event)}/>
             <Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>
          </View>
        </Image>
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
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  background: {
    flex: 1,
    flexDirection: 'column',
  }
});
