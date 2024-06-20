import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';
import {  LinearGradient  } from 'expo-linear-gradient';

export default class AddProb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      service: '',
      value: '',
      type: '',
      dropdownheight: 40,
    };
  }

  addProblem = () => {
    if (
      this.state.name &&
      this.state.service &&
      this.state.value &&
      this.state.type
    ) {
      var d = new Date();
      let service = {
        name: this.state.name,
        type: this.state.type,
        service: this.state.service,
        assignedto: this.state.value,
        state: 'Pending',
        date: d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear(),
      };
      firebase
        .database()
        .ref('/customers/' + Math.random().toString(36).slice(2))
        .set(service)
        .then(function (data) {});
      this.props.navigation.navigate('Home');
      alert('Added');
    } else {
      Alert.alert(
        'Error',
        'Please fill all the fields',
        [{ text: 'OK', onPress: () => console.log('Pressed ok') }],
        { cancelable: false }
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['cadetblue', 'lightgray', 'lightgreen']}
          style={styles.linearGradient}
          useAngle={true}
          angle={135}>
          <View style={styles.title}>
            <Text style={styles.titletext}> Customer Details </Text>
          </View>
          <View style={{ flex: 0.82 }}>
            <ScrollView>
              <View
                style={{
                  marginTop: 15,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <TextInput
                  style={styles.inp}
                  placeholder={'Customer Name'}
                  placeholderTextColor={'white'}
                  onChangeText={(name) => {
                    this.setState({ name });
                  }}
                />
                <TextInput
                  style={styles.inp}
                  placeholder={'SoftWare/HardWare'}
                  placeholderTextColor={'white'}
                  onChangeText={(type) => {
                    this.setState({ type });
                  }}
                />
                <TextInput
                  style={styles.inp}
                  placeholder={'Required Service'}
                  placeholderTextColor={'white'}
                  multiline={true}
                  numberOfLines={10}
                  onChangeText={(service) => {
                    this.setState({ service });
                  }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <DropDownPicker
                    items={[
                      { label: 'Eng 1', value: 'Eng1' },
                      { label: 'Eng 2', value: 'Eng2' },
                      { label: 'Eng 3', value: 'Eng3' },
                    ]}
                    style={{
                      backgroundColor: 'cadetblue',
                      width: 180,
                      marginTop: 10,
                      borderColor: 'white',
                      zIndex: 1,
                    }}
                    onSelectItem={(item) => {
                      this.setState({ value: item.value });
                    }}
                    placeholder="Assigned To"
                    placeholderStyle={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                    dropDownDirection="Bottom"
                    open={this.state.dropdownheight === 170 ? true : false}
                    onOpen={() => {
                      this.setState({ dropdownheight: 170 });
                    }}
                    onClose={() => {
                      this.setState({ dropdownheight: 40 });
                    }}
                  />
                  <Text style={{ color: 'white' }}> {this.state.value}</Text>
                </View>
                <View style={styles.submit}>
                  <Button
                    title="Add"
                    color="cadetblue"
                    onPress={() => {
                      this.addProblem();
                    }}
                  />
                </View>
              </View>
            </ScrollView>
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
    color: 'white',
  },
  inp: {
    width: 300,
    backgroundColor: 'cadetblue',
    borderRadius: 10,
    color: 'white',
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    borderColor: 'white',
    marginTop: 10,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  submit: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});
