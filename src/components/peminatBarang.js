import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class peminatBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>M. Fadillah Arsa</Text>
        <Text style={styles.paragraph}>Firmansyah Yanuar</Text>
        <Text style={styles.paragraph}>Aditya Al-Hakim</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 50,
    marginRight: 5,
  },
  paragraph: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
});
