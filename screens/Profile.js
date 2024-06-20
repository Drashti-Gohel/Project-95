import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'firebase';
import {LinearGradient} from 'expo-linear-gradient';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = async () => {
    let name;
    firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (data) {
        name = data.val().name;
      });

    this.setState({ name: name });
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['cadetblue', 'lightgray', 'lightgreen']}
          style={styles.linearGradient}
          useAngle={true}
          angle={135}>
          <View
            style={{
              flex: 0.7,
              justifyContent: 'center',
              alignItems: 'center',
               margin: 40,
              backgroundColor:'cadetblue',
              borderRadius:10
            }}>
            <Image
              source={require('../assets/profile_img.png')}
              style={{
                width: 80,
                height: 80,
                resizeMode: 'contain',
                borderRadius: 50,
              }}
            />

            <Text style={styles.text}>{this.state.name}</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    justifyContent:'center'
  },
  text:{
    color:'white',
    marginTop: 10
  }
});
