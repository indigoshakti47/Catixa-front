import React from 'react'

import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from 'react-native'
import firebase from 'firebase'

import Logo from '../components/Logo';


export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    const { navigate } = this.props.navigation;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate('Rate'))
      .catch(error => this.setState({ errorMessage: error.message }))
    console.log('handleLogin')
  }



  render() {
    return (
      
      <View style={styles.container}> 
      <Logo />
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#ffffff" 
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput 
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#ffffff" 
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <View style={styles.textCont}>
					<Text ></Text>
				</View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 50,
    marginTop: 18
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    borderRadius: 50,
  },
  textInput: {
    backgroundColor: '#6a7b83',
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    height: 50,
    width: '77%',
    borderColor: '#6a7b83',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 18,
    textAlign: 'auto'
  }
});

