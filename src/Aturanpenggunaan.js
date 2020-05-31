import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, H1, Root } from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const goToRegister = () => {
  Actions.register();
};

export default class Aturanpenggunaan extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Root>
        <Container>
          <Content
            style={{
              paddingHorizontal: 30,
            }}>
            <View>
              <IconIonicons
                onPress={goToRegister}
                name="ios-arrow-round-back"
                style={{ fontSize: 40 }}
              />
              <H1
                light
                style={{ marginBottom: 20, fontFamily: 'Montserrat-Bold' }}>
                ATURAN PENGGUNAAN
              </H1>
            </View>
            <Text
              style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              Dengan mendaftar dan/atau menggunakan aplikasi Mari Berbagi, maka
              pengguna dianggap telah membaca, mengerti, memahami dan menyetujui
              semua isi dalam Aturan Penggunaan.
            </Text>
            <H1 style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              Pengguna
            </H1>
            <Text
              style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              1. Berusia 17 tahun atau di antara usia 13 sampai 16 disertai
              pengawasan orang tua 2. Tidak diperkenankan bagi pengguna untuk
              melakukan tindakan yang dapat melanggar ketentuan privasi seperti
              yang diatur dalam kebijakan privasi pada situs ini.
            </Text>
            <H1 style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              Prosedur
            </H1>
            <Text
              style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              1. Pengguna Mari Berbagi wajib melalui prosedur menyumbang yang
              telah ditetapkan. 2. Penyumbang dilarang melakukan penawaran
              barang terlarang. 3. Penyumbang wajib memberikan foto dan
              informasi barang dengan lengkap dan jelas sesuai dengan kondisi
              dan kualitas barang. 4. Penerima barang wajib memberikan informasi
              identitas dan penerimaan barang dengan jujur.
            </Text>
            <Text
              style={{ marginBottom: 20, fontFamily: 'Montserrat-Regular' }}>
              Segala hal yang belum dan/atau tidak diatur dalam aturan
              penggunaan Mari Berbagi maka akan sepenuhnya merujuk pada
              peraturan perundang-undangan yang berlaku. Aturan penggunaan
              mungkin diubah dan/atau diperbaharui dari waktu ke waktu tanpa
              pemberitahuan sebelumnya. Dengan tetap mengakses dan menggunakan
              layanan Mari Berbagi, maka pengguna dianggap menyetujui
              perubahan-perubahan dalam Aturan Penggunaan.
            </Text>
          </Content>
        </Container>
      </Root>
    );
  }
}
