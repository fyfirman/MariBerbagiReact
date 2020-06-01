'use strict';
import React from 'react';
import { TextInput, TouchableWithoutFeedback, View } from 'react-native';
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
import ValidationComponent from 'react-native-form-validator';
import customStyle from './styles';
import { BASE_URL } from 'react-native-dotenv';
import Axios from 'axios';
import GLOBAL from '../../global';

const styles = customStyle;

export default class Login extends ValidationComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  goToListbarang = () => {
    Actions.listbarang();
  };

  goToRegister = () => {
    Actions.register();
  };

  handleSubmit = () => {
    this.validate({
      username: { required: true },
      password: { minlength: 3, required: true },
    });
    if (this.isFormValid('username') && this.isFormValid('password')) {
      this.authenticateUser(() => Actions.listbarang());
    }
  };

  authenticateUser = async callback => {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    await Axios.post(BASE_URL + '/api/login/', user)
      .then(res => {
        Toast.show({ text: res.data.message });
        GLOBAL.USER_ID = res.data.user._id;
        console.log(GLOBAL);
        setTimeout(() => callback(), 1000);
      })
      .catch(error => {
        console.log(user);
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
              <H1 light style={styles.headerTitle}>
                MARI BERBAGI
              </H1>
              <Text style={styles.headerSubtle}>
                Berbagi senyuman dengan menyumbang barang.{' '}
              </Text>
            </View>

            <Content style={styles.container}>
              <Card style={styles.introductionContainer}>
                <Text style={styles.introductionLabel}>
                  Mari bergabung menjadi agen penebar manfaat dengan sumbangan
                  barang layak gunamu di Mari Berbagi.
                </Text>
                <Form style={styles.formContainer}>
                  <Label style={styles.label}>Username</Label>
                  <TextInput
                    placeholder="Masukkan Username"
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                    style={styles.textField}
                  />
                  {this.isFieldInError('username') &&
                    this.getErrorsInField('username').map(errorMessage => (
                      <Text style={styles.errorLabel}>{errorMessage}</Text>
                    ))}
                  <Label style={styles.label}>Password</Label>
                  <TextInput
                    placeholder="Masukkan Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                    style={styles.textField}
                  />
                  {this.isFieldInError('password') &&
                    this.getErrorsInField('password').map(errorMessage => (
                      <Text style={styles.errorLabel}>{errorMessage}</Text>
                    ))}
                </Form>
                <Button
                  block
                  onPress={this.handleSubmit}
                  style={styles.buttonPrimary}>
                  <Text>Masuk</Text>
                </Button>
                {/* simpen sini hidden*/}
                <Text style={styles.registerLabel}>
                  Belum punya akun Mari Berbagi?{' '}
                  <TouchableWithoutFeedback onPress={this.goToRegister}>
                    <Text style={styles.registerButton}>Daftar di Sini</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </Card>
            </Content>
          </Content>
        </Container>
      </Root>
    );
  }
}
