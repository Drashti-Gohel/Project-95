import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import firebase from 'firebase';
let posts = require('./temp_posts.json');
import Card from './card';
import {LinearGradient} from 'expo-linear-gradient';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
 
 componentDidMount(){
   this.fetchPost();
 }
  keyExtractor = (item, index) => {
    index.toString();
  };

  renderItem = ({ item: prob }) => {
    return <Card prob={prob} navigation={this.props.navigation} />;
  };

   fetchPost = () => {
    firebase
      .database()
      .ref('/customers/')
      .on(
        'value',
        (data) => {
          let posts = [];
          if (data.val()) {
            Object.keys(data.val()).forEach(function (key) {
              posts.push({
                key: key,
                value: data.val()[key],
              });
            });
          }
          this.setState({ posts: posts });
        },
        function (error) {
          console.log('the read failed');
        }
      );
  };
  render() {
    return (
      
      <View style={styles.container}>
      <LinearGradient
        colors={['cadetblue','lightgray','lightgreen']}
        style={styles.linearGradient}
        useAngle={true}
          angle={135}>
        <View style={styles.title}>
          <Text style={styles.titletext}> App Name</Text>
        </View>
        <View style={{ flex: 0.85 }}>
          <FlatList
            data={this.state.posts}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cadetblue',
    flex: 0.15,
  },
  titletext: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'white'
  },
   linearGradient: {
    flex: 1,
    
    borderRadius: 5,
  }
});
