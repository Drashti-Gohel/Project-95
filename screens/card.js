import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_id: this.props.prob.key,
      post_data: this.props.prob.value,
    };
  }
  render() {
   let prob = this.state.post_data;
  // var { post_data} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}> Customer Name: {prob.name} </Text>
        <Text style={styles.text}> Type: {prob.type} </Text>
        <Text style={styles.text}> Service needed: {prob.service} </Text>
        <Text style={styles.text}> Date: {prob.date} </Text>
        <Text style={styles.text}> Assigned To: {prob.assignedto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    margin:5,
    color:'white'
  },
});
