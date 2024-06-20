import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { LinearGradient} from 'expo-linear-gradient'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      repassword: '',
    };
  }
  registeruser =  (email, password, repassword,name) => {
    if (password === repassword) {  
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredntial) => {
        alert('User Registered'),
          firebase
            .database()
            .ref('/users/' + userCredntial.user.uid)
            .set({
              name: name,
              email:userCredntial.user.email,
              current_theme:'dark'
            });
      }).catch((error) => {
          alert(error.message);
        });
    } else {
      alert('Passwords does not match');
      }
  };
  render() {
    const { email, password, repassword,name } = this.state;
    return (
      <View style={styles.container}>
       <LinearGradient colors={['cadetblue', 'lightgray', 'lightgreen']}
      style={styles.linearGradient}>
        <Text style={{color:'white',fontSize:30}}>Register </Text>
        <TextInput
          style={styles.input}
          placeholder={'Name'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
           this.setState({ name: text})
          }}
        />
        <TextInput
          style={styles.input}
          placeholder={'Enter Email'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />
        <TextInput
          //secureTextEntry={true}
          style={styles.input}
          placeholder={'Enter Password'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />

        <TextInput
          //secureTextEntry={true}
          style={styles.input}
          placeholder={'Re-Enter Password'}
          placeholderTextColor={'black'}
          onChangeText={(text) => {
            this.setState({ repassword: text });
          }}
        />

        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.registeruser(email, password, repassword,name);
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={{ color: 'white', fontSize: 20 }}> Login </Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    height: 45,
    marginTop: 20,
    borderRadius: 10,
  },
  login: {
    backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'white',
    shadowRadius: 10,
  },
   linearGradient:{
    flex:1,    
     alignItems: 'center',
    justifyContent: 'center',
  }
});
