import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

export default class ButtonPrimary extends Component {
  render() {
    return (
      <Button block style={styles.button}>
        <Text> {this.props.text} </Text>
      </Button>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F05E23',
    marginVertical: 5,
    borderRadius: 5,
  },
});
