import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native'
import firebase from '../util/firebase'

export default class Form extends Component {
  state = {
    email: '',
    password: '',
    userData: {}
  }

  storeToken = async (user) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(user))
    } catch (error) {
      console.log("Something went wrong", error)
    }
  }

  getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData')
      let data = JSON.parse(userData)
      console.log(data)
    } catch(error) {
      console.log('Something went wrong', error)
    }
  }

  componentDidMount() {
    this.getToken()
  }

  handleEmail = text => {
    this.setState({ email: text })
  }

  handlePassword = text => {
    this.setState({ password: text })
  }

  login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      this.storeToken(JSON.stringify(res.user))
      console.log(this.state.userData)
    }).catch(error => {
      console.log(error.message)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
    alignItems: 'center',
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
})
