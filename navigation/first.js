 import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity } from 'react-native';


export default class First extends React.Component {
  render() {
    return (
     <View style={styles.container}>
      <View style={styles.title}>
          <Text style={styles.titletext}> App Name</Text>
        </View>
        <View style={{justifyContent:'center',flex:0.75}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}}>
        <View style={styles.button}>
        <Text> Login for Users </Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.button}>
        <Text> Login for Employees </Text>
        </View>
        </TouchableOpacity>
        </View>
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
  button:{
    width:200,
    backgroundColor:'white',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    marginTop:20
  }
});
