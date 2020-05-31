import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
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
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const goToAturanpenggunaan = () => {
  Actions.aturanpenggunaan();
};

const goToLogin = () => {
  Actions.login();
};

export default class Register extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      username: '',
      usernameError: '',
      password: '',
      passwordError: '',
      cpassword: '',
      cpasswordError: '',
    };
  }

  _onPressButton = () => {
    //this.validate({
    //email: {email: true, required: true},
    //password: {minlength: 3, required: true},
    //});
    //if (this.isFormValid('email') && this.isFormValid('password')) {
    Actions.listbarang();
    //}
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
            <View
              style={{
                backgroundColor: '#F05E23',
                paddingTop: 50,
                paddingBottom: 70,
                paddingHorizontal: 30,
                marginBottom: -40,
              }}>
              <IconIonicons
                onPress={goToLogin}
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
                  //onChangeText={TextInputName => this.setState({ TextInputName })}
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
                  //onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
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
                  //onChangeText={TextInputUsername => this.setState({ TextInputUsername })}
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
                  //onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
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
                  //onChangeText={TextInputCpassword => this.setState({ TextInputCpassword })}
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
                  <TouchableWithoutFeedback onPress={goToAturanpenggunaan}>
                    <Text style={styles.aturan}>
                      Aturan Penggunaan Mari Berbagi
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </Content>

              <Button
                block
                onPress={this._onPressButton}
                style={styles.buttonPrimary}>
                <Text>Masuk</Text>
              </Button>

              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={styles.punyaAkun}>
                  Sudah punya akun ?{' '}
                  <TouchableWithoutFeedback onPress={goToLogin}>
                    <Text numberOfLines={1} style={styles.punyaAkunLogin}>
                      Log in
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>

              {/*<Text style={{textAlign:"center",color:"#8E8E8E"}}>atau daftar dengan</Text>
                  <Button block light style={styles.button}
                        onPress={() =>
                        ActionSheet.show(
                        {
                           options: BUTTONS,
                           cancelButtonIndex: CANCEL_INDEX,
                           destructiveButtonIndex: DESTRUCTIVE_INDEX,
                           title: "daftar dengan Akun Media Sosial"
                        },
                        buttonIndex => {
                           this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                        )}>
                     <Text>Akun Media Sosial</Text>
                     </Button> */}
            </Card>
          </Content>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F05E23',
  },
  arrow: {
    fontSize: 40,
    color: 'white',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  form: {
    paddingTop: 10,
  },
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: 'black',
  },
  notifError: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: 'red',
  },
  textinput: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E4E4E4',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  content: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  term: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: 'grey',
  },
  aturan: {
    color: '#F05E23',
  },
  punyaAkun: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#8E8E8E',
  },
  punyaAkunLogin: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    paddingLeft: 5,
    color: '#F05E23',
  },
  button: {
    backgroundColor: '#FFE8C5',
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonPrimary: {
    backgroundColor: '#F05E23',
    marginVertical: 5,
    borderRadius: 5,
  },
  container: {
    //paddingTop: 5,
    //paddingHorizontal: 10
  },
});
