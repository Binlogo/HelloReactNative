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
        forecast: null
    	};
      fetch('http://wthrcdn.etouch.cn/weather_mini?citykey=101010100')
        .then((res) => {
          return res.json()
        })
        .then((responseJSON) => {
          this.setState({
            forecast: {
              main: responseJSON.data.forecast[0].type,
              description: responseJSON.data.ganmao,
              temp: responseJSON.data.wendu,
            }
          });
        })
        .catch((error) => {
          console.warn(error);
        })
  }

    _handleInputTextDidChanged(event) {
		this.setState({zip: event.nativeEvent.text});
	}

  	render() {
      var content = null;
      if (this.state.forecast !== null) {
        content = <Forecast main={this.state.forecast.main} description={this.state.forecast.description} temp={this.state.forecast.temp}/>;
      }
    	return (
     	 <View style={styles.container}>
        <Image source={require("./background.jpg")} resizeMode='cover' style={styles.background}>
          <View style={styles.overlay}>
         	   <Text style={styles.welcome}>
              	地区邮编： {this.state.zip}
         	   </Text>
         	   <TextInput style={styles.input} onSubmitEditing={(event) => this._handleInputTextDidChanged(event)}/>
             {content}
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
