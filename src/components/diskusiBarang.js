import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class diskusiBarang extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Diskusi</Text>
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
