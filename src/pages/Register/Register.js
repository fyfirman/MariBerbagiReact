import React, { Component } from 'react';
import { TextInput, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Container,
  Card,
  Content,
  Text,
  H1,
  Form,
  Label,
  Root,
  Toast,
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { BASE_URL } from 'react-native-dotenv';
import customStyle from './styles';
import Axios from 'axios';

const styles = customStyle;

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      cpassword: '',
      nameError: '',
      emailError: '',
      usernameError: '',
      passwordError: '',
      cpasswordError: '',
    };
  }

  goToAturanpenggunaan = () => {
    Actions.aturanpenggunaan();
  };

  goToLogin = () => {
    Actions.login();
  };

  _onPressButton = () => {
    Actions.listbarang();
  };

  handleSubmit = () => {
    const user = {
      username: 'test12345678adssasdasaaaaaa',
      password: '123456781',
      passwordConf: '123456781',
      profile: {
        name: 'firmansyah',
        address: 'Jl. Saluyu XV A no. 11',
        profile_picture: '',
        phone: '0878322343',
        email: 'test@gmail.com',
      },
    };

    Axios.post(BASE_URL + '/api/register/', user)
      .then(res => {
        console.log(res.data.message);
        Toast.show({ text: res.data.message });
      })
      .catch(error => {
        console.log(error);
        Toast.show({ text: error.message });
      });
  };

  // Kumpulan function input Validator sesuai field pada form registrasi
  nameValidator() {
    const re_name = /^[A-Za-z\s]+$/;
    let nameIsValid = re_name.test(this.state.name);

    if (this.state.name == '') {
      this.setState({ nameError: 'Nama masih kosong nih, isi dulu ya ...' });
    } else {
      if (!nameIsValid) {
        this.setState({ nameError: 'Isi nama lengkap sesuai KTP ya :)' });
      } else {
        this.setState({ nameError: '' });
      }
    }
  }

  emailValidator() {
    const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailIsValid = re_email.test(this.state.email);

    if (this.state.email == '') {
      this.setState({ emailError: 'Boleh diisi Email nya dulu kakak :)' });
    } else {
      if (!emailIsValid) {
        this.setState({ emailError: 'Isi email yg valid ya' });
      } else {
        this.setState({ emailError: '' });
      }
    }
  }

  usernameValidator() {
    const re_username = /^[A-Za-z0-9_.]+$/;
    let usernameIsValid = re_username.test(this.state.username);

    if (this.state.username == '') {
      this.setState({ usernameError: 'Username harus diisi hehe..' });
    } else {
      if (this.state.username.length < 4) {
        this.setState({
          usernameError: 'Eitss.. Username minimal ada 4 karakter ya',
        });
      } else if (!usernameIsValid) {
        this.setState({
          usernameError:
            "Username ga boleh ada spasi dan simbol kecuali 'titik' dan 'underscore' ya.",
        });
      } else {
        this.setState({ usernameError: '' });
      }
    }
  }

  passwordValidator() {
    if (this.state.password == '') {
      this.setState({
        passwordError: 'Wahh password masih kosong, bisa dibobol hacker!',
      });
    } else {
      if (this.state.password.length < 6) {
        this.setState({ passwordError: 'Password minimal ada 6 karakter ya' });
      } else {
        this.setState({ passwordError: '' });
      }
    }
  }

  cpasswordValidator() {
    if (this.state.cpassword == '') {
      this.setState({ cpasswordError: 'Konfirmasi password dulu kuy' });
    } else {
      if (this.state.cpassword != this.state.password) {
        this.setState({
          cpasswordError: 'Password ga cocok! Cocoknya sama doi kali ya hehe',
        });
      } else {
        this.setState({ cpasswordError: '' });
      }
    }
  }

  render() {
    return (
      <Root>
        <Container>
          <Content style={styles.container}>
            <View style={styles.header}>
              <IconIonicons
                onPress={this.goToLogin}
                name="ios-arrow-round-back"
                style={{ fontSize: 40, color: 'white' }}
              />
              <H1
                light
                style={{ color: '#ffffff', fontFamily: 'Montserrat-Bold' }}>
                DAFTAR AKUN
              </H1>
            </View>

            <Card style={styles.card}>
              <Form style={styles.form}>
                <Label style={styles.label}>Nama Lengkap</Label>
                <TextInput
                  placeholder="Masukkan Nama Lengkap"
                  style={styles.textinput}
                  onChangeText={text => {
                    this.setState({ name: text });
                  }}
                  onBlur={() => this.nameValidator()}
                />
                <Text style={styles.notifError}>{this.state.nameError}</Text>

                <Label style={styles.label}>Alamat Email</Label>
                <TextInput
                  placeholder="Masukkan Alamat E-mail"
                  style={styles.textinput}
                  onChangeText={text => {
                    this.setState({ email: text });
                  }}
                  onBlur={() => this.emailValidator()}
                />
                <Text style={styles.notifError}>{this.state.emailError}</Text>

                <Label style={styles.label}>Username</Label>
                <TextInput
                  placeholder="Isi Username yang kamu ingin"
                  style={styles.textinput}
                  onChangeText={text => {
                    this.setState({ username: text });
                  }}
                  onBlur={() => this.usernameValidator()}
                />
                <Text style={styles.notifError}>
                  {this.state.usernameError}
                </Text>

                <Label style={styles.label}>Password</Label>
                <TextInput
                  placeholder="Buat Password yang kuat"
                  style={styles.textinput}
                  onChangeText={text => {
                    this.setState({ password: text });
                  }}
                  secureTextEntry={true}
                  onBlur={() => this.passwordValidator()}
                />
                <Text style={styles.notifError}>
                  {this.state.passwordError}
                </Text>

                <Label style={styles.label}>Konfirmasi Password</Label>
                <TextInput
                  placeholder="Isi lagi password kamu disini ya"
                  style={styles.textinput}
                  onChangeText={text => {
                    this.setState({ cpassword: text });
                  }}
                  secureTextEntry={true}
                  onBlur={() => this.cpasswordValidator()}
                />
                <Text style={styles.notifError}>
                  {this.state.cpasswordError}
                </Text>
              </Form>

              <Content style={styles.content}>
                <Text style={styles.term}>
                  Dengan mendaftar akun Mari Berbagi saya menyetujui{' '}
                  <TouchableWithoutFeedback onPress={this.goToAturanpenggunaan}>
                    <Text style={styles.aturan}>
                      Aturan Penggunaan Mari Berbagi
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </Content>

              <Button
                block
                onPress={this.handleSubmit}
                style={styles.buttonPrimary}>
                <Text>Daftar</Text>
              </Button>

              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={styles.punyaAkun}>
                  Sudah punya akun ?{' '}
                  <TouchableWithoutFeedback onPress={this.goToLogin}>
                    <Text numberOfLines={1} style={styles.punyaAkunLogin}>
                      Log in
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </Card>
          </Content>
        </Container>
      </Root>
    );
  }
}
