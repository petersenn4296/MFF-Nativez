import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class CreateTruck extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Owners 1 truck</Text>
        <Button
          onPress={() => {navigate('Order')}}
          title="Go to the order page"
          color="#841584"
        />
        <Button
          onPress={() => {navigate('LoggedIn')}}
          title="Go to the logged in page"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  }
})
