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
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import ValidationComponent from 'react-native-form-validator';
import customStyle from './styles';

const styles = customStyle;

export default class Login extends ValidationComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  goToListbarang = () => {
    Actions.listbarang();
  };

  goToRegister = () => {
    Actions.register();
  };

  _onPressButton = () => {
    this.validate({
      email: { email: true, required: true },
      password: { minlength: 3, required: true },
    });
    if (this.isFormValid('email') && this.isFormValid('password')) {
      Actions.listbarang();
    }
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <View style={styles.header}>
              <IconIonicons
                onPress={this.goToListbarang}
                name="ios-arrow-round-back"
                style={{ fontSize: 40, color: 'white' }}
              />
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

                <Form style={{ paddingVertical: 20 }}>
                  <Label style={styles.label}>Email</Label>
                  <TextInput
                    placeholder="Masukkan email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    style={styles.textField}
                  />
                  {this.isFieldInError('email') &&
                    this.getErrorsInField('email').map(errorMessage => (
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
                  onPress={this._onPressButton}
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
