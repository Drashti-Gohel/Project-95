import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['cadetblue', 'lightgray', 'lightgreen']}
          style={styles.linearGradient}
          useAngle={true}
          angle={45}>
          <Text style={{color:'white',fontSize:30}}>Login </Text>

          <TextInput
            style={styles.input}
            placeholder={'Enter Email'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder={'Enter Password'}
            placeholderTextColor={'black'}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
          />

          <TouchableOpacity
            onPress={() => this.signIn(email, password)}
            style={styles.login}>
            <Text style={{ color: 'white', fontSize: 20 }}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            style={styles.login}>
            <Text style={{ color: 'white', fontSize: 20 }}> New User </Text>
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
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
