import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class deskripsiKampanye extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Kami membutuhkan pakaian dalam jumlah banyak untuk korban gempa di
          Sulawesi. Sesedikit apapun itu bantuanmu, sangat berharga bagi kami.
          {'\n'}
          {'\n'}
          Mari bantu mengumpulkan pakaian!
        </Text>
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
    fontSize: 13,
  },
});
