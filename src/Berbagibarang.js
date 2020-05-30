import React, {Component} from 'react';
import {TextInput, Alert, StyleSheet, View, Text, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Button,
  Container,
  Card,
  Content,
  H1,
  Form,
  ListItem,
  Label,
  CheckBox,
  Root,
  Textarea,
} from 'native-base';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {RadioButton} from 'react-native-paper';

const goToHome = () => {
  Actions.home();
};

var radio_props = [{label: 'Baru', value: 0}, {label: 'Bekas', value: 1}];

export default class Berbagibarang extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      namaBarang: '',
      namaBarangError: '',
      deskripsi: '',
      deskripsiError: '',
    };
  }

  state = {
    checked: 'first',
  };

  namaBarangValidator() {
    const re_namaBarang = /^[A-Za-z0-9()\s]+$/;
    let namaBarangIsValid = re_namaBarang.test(this.state.namaBarang);

    if (this.state.name == '') {
      this.setState({
        namaBarangError: 'Nama Barang masih kosong nih, isi dulu ya',
      });
    } else {
      if (!namaBarangIsValid) {
        this.setState({
          namaBarangError:
            "Nama Barang tidak boleh ada simbol, kecuali kurung '( )' ",
        });
      } else {
        this.setState({nameBarangError: ''});
      }
    }
  }

  deskripsiValidator() {
    if (this.state.deskripsiError == '') {
      this.setState({deskripsiError: 'Isi deskripsi dulu ya'});
    } else {
      this.setState({deskripsiError: ''});
    }
  }

  CheckTextInput = () => {
    if (this.state.NamaBarang != '') {
      if (this.state.Deskripsi != '') {
        alert('Barang berhasil dipublikasikan!');
      } else {
        Alert.alert('Deskripsi kosong', 'Mohon masukkan Deskripsi Barang');
      }
    } else {
      Alert.alert('Nama Barang masih Kosong', 'Mohon masukkan Nama Barang');
    }
  };

  render() {
    const {checked} = this.state;

    let kategoriBarang = [
      {
        value: 'Baju',
      },
      {
        value: 'Elektornik',
      },
      {
        value: 'Alat Rumah Tangga',
      },
    ];

    return (
      <Root>
        <Container>
          <Content>
            <View style={styles.header}>
              <IconIonicons
                onPress={goToHome}
                name="ios-arrow-round-back"
                style={styles.arrow}
              />
              <H1 light style={styles.judulPage}>
                BERBAGI BARANG
              </H1>
              <Text style={styles.subtitlePage}>
                Pastikan barang yang kamu sumbang layak guna ya.
              </Text>
            </View>

            <Content style={styles.container}>
              <Card style={styles.card}>
                <Form style={styles.form}>
                  <Label style={styles.namaKolom}>Foto Barang</Label>
                  <View style={styles.view2}>
                    <Image
                      style={styles.image2}
                      //resizeMode="contain"
                      source={require('../assets/images/macOS5.jpg')}
                    />
                    <Image
                      style={styles.image3}
                      //resizeMode="contain"
                      source={require('../assets/images/macOS5.jpg')}
                    />
                  </View>

                  <Label style={styles.namaKolom}>Nama Barang</Label>
                  <TextInput
                    onChangeText={NamaBarang => this.setState({NamaBarang})}
                    style={styles.kolomInput}
                    onBlur={() => this.namaBarangValidator()}
                  />
                  <Text style={styles.notifError}>
                    {this.state.namaBarangError}
                  </Text>

                  <Label style={styles.namaKolom}>Deskripsi</Label>
                  <Textarea
                    onChangeText={Deskripsi => this.setState({Deskripsi})}
                    //style={styles.kolomInput}
                    rowSpan={5}
                    bordered
                    onBlur={() => this.deskripsiValidator()}
                  />
                  <Text style={styles.notifError}>
                    {this.state.deskripsiError}
                  </Text>

                  <Label style={styles.namaKolom}>Kondisi Barang</Label>
                  <View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton
                        value="baru"
                        color="#F05E23"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          this.setState({checked: 'first'});
                        }}
                      />
                      <Text>Baru</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton
                        value="bekas"
                        color="#F05E23"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => {
                          this.setState({checked: 'second'});
                        }}
                      />
                      <Text>Bekas</Text>
                    </View>
                  </View>

                  <View>
                    <Label style={styles.namaKolom}>Jumlah Barang</Label>
                    <TextInput
                      onChangeText={JumlahBarang =>
                        this.setState({JumlahBarang})
                      }
                      style={styles.kolomInput}
                      onBlur={() => this.jumlahBarangValidator}
                      keyboardType={'numeric'}
                    />
                    <Text style={styles.notifError}>
                      {this.state.jumlahBarangError}
                    </Text>
                  </View>

                  <View style={styles.pilOngkir}>
                    <Label style={styles.namaKolom}>
                      Apakah kamu bersedia COD?
                    </Label>
                    <ListItem>
                      <CheckBox color="#F05E23" />
                      <Text style={styles.textPilOngkir}>Bersedia COD</Text>
                    </ListItem>
                    {/*
                                    <CheckBox
                                        value={true}
                                        disabled={false}
                                    />
                                    <Text>{" "} Tanggung Biaya Pengiriman</Text>
                                    */}
                  </View>

                  <View style={styles.pilOngkir}>
                    <Label style={styles.namaKolom}>
                      Apakah kamu menanggung biaya ongkir?
                    </Label>
                    <ListItem>
                      <CheckBox color="#F05E23" />
                      <Text style={styles.textPilOngkir}>
                        Tanggung Biaya Pengiriman
                      </Text>
                    </ListItem>
                    {/*
                                    <CheckBox
                                        value={true}
                                        disabled={false}
                                    />
                                    <Text>{" "} Tanggung Biaya Pengiriman</Text>
                                    */}
                  </View>
                </Form>

                <Button
                  block
                  onPress={this.CheckTextInput}
                  style={styles.buttonPrimary}>
                  <Text style={styles.tulisanButton}>PUBLIKASI</Text>
                </Button>
              </Card>
            </Content>
          </Content>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F05E23',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 25,
    marginBottom: -40,
  },
  arrow: {
    fontSize: 40,
    color: 'white',
  },
  judulPage: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
  },
  subtitlePage: {
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 25,
  },
  card: {
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  form: {
    paddingVertical: 20,
  },
  namaKolom: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 10,
  },
  view2: {
    flexDirection: 'row',
  },
  image2: {
    width: 50,
    height: 50,
    marginVertical: 7,
    marginRight: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image3: {
    width: 50,
    height: 50,
    marginVertical: 7,
    marginHorizontal: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  kolomInput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E4E4E4',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  notifError: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: 'red',
  },
  button: {
    backgroundColor: '#FFE8C5',
    marginVertical: 5,
    borderRadius: 5,
  },
  dropdown: {
    borderColor: 'orange',
  },
  pilOngkir: {
    paddingTop: 5,
    left: 0,
  },
  textPilOngkir: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    paddingLeft: 5,
  },
  buttonPrimary: {
    backgroundColor: '#F05E23',
    marginVertical: 5,
    borderRadius: 5,
  },
  tulisanButton: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'white',
  },
});
