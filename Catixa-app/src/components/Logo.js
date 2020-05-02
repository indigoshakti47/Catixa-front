import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:250, height: 100}}
          			source={require('../images/catixa_white.png')}/>
          		
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 2.5,
    justifyContent:'space-around',
    alignItems: 'center'
  }
});