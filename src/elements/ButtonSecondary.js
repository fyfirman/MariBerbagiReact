import React, {Component} from 'react'
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

export default class ButtonSecondary extends Component{
   render() {
      return (
          <Button block light style={styles.button}><Text> {this.props.text} </Text></Button>
      );
    }
}
const styles = StyleSheet.create({
   button: {
      backgroundColor: '#FFE8C5',
      marginVertical:5,
      borderRadius:5
   },
});