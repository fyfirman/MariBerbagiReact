import React, { Component } from 'react';
import {
  TextInput,
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
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
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import customStyle from './styles';

const styles = customStyle;

export default class AddStuff extends Component {
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
      condition: 'new',
      is_cod: false,
      postal_fee: false,
      picture: {
        filepath: {
          data: '',
          uri: '',
        },
        fileData: '',
        fileUri: '',
      },
    };
  }

  handleBack = () => {
    Actions.pop();
  };

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response received');

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        this.setState({
          picture: {
            filePath: response,
            fileData: response.data,
            fileUri: response.uri,
          },
        });
      }
    });
  };

  renderFileUri() {
    if (this.state.picture.fileUri) {
      return (
        <Image
          source={{ uri: this.state.picture.fileUri }}
          style={styles.image2}
        />
      );
    } else {
      return (
        <Image
          source={require('../../../assets/images/macOS5.jpg')}
          style={styles.image2}
        />
      );
    }
  }

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
        this.setState({ nameBarangError: '' });
      }
    }
  }

  deskripsiValidator() {
    if (this.state.deskripsiError == '') {
      this.setState({ deskripsiError: 'Isi deskripsi dulu ya' });
    } else {
      this.setState({ deskripsiError: '' });
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
    return (
      <Root>
        <Container>
          <Content>
            <View style={styles.header}>
              <IconIonicons
                onPress={this.handleBack}
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
                  <View style={styles.view2}>{this.renderFileUri()}</View>
                  <TouchableOpacity
                    onPress={this.chooseImage}
                    style={styles.btnSection}>
                    <Text style={styles.btnText}>Choose File</Text>
                  </TouchableOpacity>
                  <Label style={styles.namaKolom}>Nama Barang</Label>
                  <TextInput
                    onChangeText={NamaBarang => this.setState({ NamaBarang })}
                    style={styles.kolomInput}
                    onBlur={() => this.namaBarangValidator()}
                  />
                  <Text style={styles.notifError}>
                    {this.state.namaBarangError}
                  </Text>

                  <Label style={styles.namaKolom}>Deskripsi</Label>
                  <Textarea
                    onChangeText={Deskripsi => this.setState({ Deskripsi })}
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
                    <View style={styles.radioContainer}>
                      <RadioButton
                        value="baru"
                        color="#F05E23"
                        status={
                          this.state.condition === 'new'
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => {
                          this.setState({ condition: 'new' });
                        }}
                      />
                      <Text>Baru</Text>
                    </View>
                    <View style={styles.radioContainer}>
                      <RadioButton
                        value="bekas"
                        color="#F05E23"
                        status={
                          this.state.condition === 'old'
                            ? 'checked'
                            : 'unchecked'
                        }
                        onPress={() => {
                          this.setState({ condition: 'old' });
                        }}
                      />
                      <Text>Bekas</Text>
                    </View>
                  </View>

                  <View>
                    <Label style={styles.namaKolom}>Jumlah Barang</Label>
                    <TextInput
                      onChangeText={JumlahBarang =>
                        this.setState({ JumlahBarang })
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
                      <CheckBox
                        color="#F05E23"
                        checked={this.state.is_cod}
                        onPress={() =>
                          this.setState({ is_cod: !this.state.is_cod })
                        }
                      />
                      <Text style={styles.textPilOngkir}>Bersedia COD</Text>
                    </ListItem>
                  </View>

                  <View style={styles.pilOngkir}>
                    <Label style={styles.namaKolom}>
                      Apakah kamu menanggung biaya ongkir?
                    </Label>
                    <ListItem>
                      <CheckBox
                        color="#F05E23"
                        checked={this.state.postal_fee}
                        onPress={() =>
                          this.setState({ postal_fee: !this.state.postal_fee })
                        }
                      />
                      <Text style={styles.textPilOngkir}>
                        Tanggung Biaya Pengiriman
                      </Text>
                    </ListItem>
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
