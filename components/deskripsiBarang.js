import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class deskripsiBarang extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
            Pakaian bekas warna biru. Birunya enggak seperti langit, agak tua sedikit. Dibeli di toko termahal di dunia. Hanya saja lokasinya di kampung bebek.
            {"\n"}{"\n"}
            Pakaian ini baru dipake 2 kali. Ukuran L.</Text>
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
