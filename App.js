/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.mainPage}>
          Olá Pessoas!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainPage: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
