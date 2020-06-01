import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
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
  Toast,
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import customStyle from './styles';
import Axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const styles = customStyle;

export default class AddStuff extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      jumlahBarang: '',
      condition: 'new',
      is_cod: false,
      postal_fee: false,
      picture: {
        fileUri: '',
        fileType: '',
        fileName: '',
      },
      namaBarangError: '',
      deskripsiError: '',
      addressError: '',
      jumlahBarangError: '',
      pictureFile: '',
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
            fileUri: response.uri,
            fileName: response.fileName,
            fileType: response.type,
          },
          pictureFile: response,
        });
        console.log(this.state.picture);
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

  handleSubmit = () => {
    this.storeData(() => Actions.pop());
  };

  storeData = callback => {
    let formdata = new FormData();
    // formdata.append('picture', this.state.pictureFile);
    formdata.append('name', this.state.name);
    formdata.append('description', this.state.description);
    formdata.append('status', true);
    formdata.append('amount', this.state.jumlahBarang);
    formdata.append('condition', this.state.condition);
    formdata.append('picture', {
      name: this.state.picture.fileName,
      uri:
        Platform.OS === 'android'
          ? this.state.picture.uri
          : this.state.picture.uri.replace('file://', ''),
      type: this.state.picture.fileType,
    });
    formdata.append('address', this.state.address);
    formdata.append('is_cod', this.state.is_cod);
    formdata.append('postal_fee', this.state.postal_fee);
    formdata.append('owner_id', '5ebaf6865b7b9b05acb03c61');

    Axios.post(BASE_URL + '/api/stuff', formdata, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
      },
    })
      .then(res => {
        console.log(res.data.message);
        Toast.show({ text: res.data.message });
        setTimeout(() => callback(), 1000);
      })
      .catch(error => {
        console.log(formdata);
        console.log(error);
        console.log(error.response.data);
        Toast.show({ text: error.response.data.message });
      });
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
                    <Text style={styles.btnText}>Pilih foto</Text>
                  </TouchableOpacity>
                  <Label style={styles.namaKolom}>Nama Barang</Label>
                  <TextInput
                    onChangeText={name => this.setState({ name })}
                    style={styles.kolomInput}
                  />
                  <Text style={styles.notifError}>
                    {this.state.namaBarangError}
                  </Text>

                  <Label style={styles.namaKolom}>Deskripsi</Label>
                  <Textarea
                    onChangeText={description => this.setState({ description })}
                    rowSpan={5}
                    bordered
                  />
                  <Text style={styles.notifError}>
                    {this.state.deskripsiError}
                  </Text>

                  <Label style={styles.namaKolom}>Alamat</Label>
                  <TextInput
                    onChangeText={address => this.setState({ address })}
                    style={styles.kolomInput}
                  />
                  <Text style={styles.notifError}>
                    {this.state.addressError}
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
                      onChangeText={jumlahBarang =>
                        this.setState({ jumlahBarang })
                      }
                      style={styles.kolomInput}
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
                  onPress={this.handleSubmit}
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
