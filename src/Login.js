'use strict';
import React, { Component } from 'react';
import {
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  ActionSheet,
  Container,
  Card,
  Content,
  Text,
  H1,
  Form,
  Item,
  Label,
  Input,
  Root,
} from 'native-base';
import ButtonPrimary from './elements/ButtonPrimary';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import ValidationComponent from 'react-native-form-validator';

var BUTTONS = [
  { text: 'Google', icon: 'american-football', iconColor: '#2c8ef4' },
  { text: 'Facebook', icon: 'analytics', iconColor: '#f42ced' },
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const goToListbarang = () => {
  Actions.listbarang();
};

const goToRegister = () => {
  Actions.register();
};

export default class Login extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _onPressButton = () => {
    this.validate({
      email: { email: true, required: true },
      password: { minlength: 3, required: true },
    });
    if (this.isFormValid('email') && this.isFormValid('password')) {
      Actions.listbarang();
    }
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <View
              style={{
                backgroundColor: '#F05E23',
                paddingTop: 50,
                paddingBottom: 70,
                paddingHorizontal: 30,
                marginBottom: -40,
              }}>
              <IconIonicons
                onPress={goToListbarang}
                name="ios-arrow-round-back"
                style={{ fontSize: 40, color: 'white' }}
              />
              <H1
                light
                style={{ color: '#ffffff', fontFamily: 'Montserrat-Bold' }}>
                MARI BERBAGI
              </H1>
              <Text
                style={{ color: '#ffffff', fontFamily: 'Montserrat-Regular' }}>
                Berbagi senyuman dengan menyumbang barang.{' '}
              </Text>
            </View>

            <Content style={styles.container}>
              <Card
                style={{
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  padding: 20,
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Mari bergabung menjadi agen penebar manfaat dengan sumbangan
                  barang layak gunamu di Mari Berbagi.
                </Text>

                <Form style={{ paddingVertical: 20 }}>
                  <Label
                    style={{ fontSize: 13, fontFamily: 'Montserrat-Regular' }}>
                    Email
                  </Label>
                  <TextInput
                    placeholder="Masukkan email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderColor: '#E4E4E4',
                      borderRadius: 5,
                      paddingHorizontal: 10,
                      marginBottom: 5,
                    }}
                  />
                  {this.isFieldInError('email') &&
                    this.getErrorsInField('email').map(errorMessage => (
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'Montserrat-Regular',
                        }}>
                        {errorMessage}
                      </Text>
                    ))}
                  <Label
                    style={{ fontSize: 13, fontFamily: 'Montserrat-Regular' }}>
                    Password
                  </Label>
                  <TextInput
                    placeholder="Masukkan Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                    style={{
                      backgroundColor: '#F5F5F5',
                      borderColor: '#E4E4E4',
                      borderRadius: 5,
                      paddingHorizontal: 10,
                    }}
                  />
                  {this.isFieldInError('password') &&
                    this.getErrorsInField('password').map(errorMessage => (
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'Montserrat-Regular',
                        }}>
                        {errorMessage}
                      </Text>
                    ))}
                </Form>
                <Button
                  block
                  onPress={this._onPressButton}
                  style={styles.buttonPrimary}>
                  <Text>Masuk</Text>
                </Button>
                {/* simpen sini hidden*/}
                <Text
                  style={{
                    marginTop: 10,
                    textAlign: 'center',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                  }}>
                  Belum punya akun Mari Berbagi?{' '}
                  <TouchableWithoutFeedback onPress={goToRegister}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 12,
                        color: '#F05E23',
                      }}>
                      Daftar di Sini
                    </Text>
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

const styles = StyleSheet.create({
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
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});

{
  /*         
         <Text style={{textAlign:"center",color:"#8E8E8E"}}>atau masuk dengan</Text>
         <Button block light style={styles.button}
                        onPress={() =>
                        ActionSheet.show(
                        {
                           options: BUTTONS,
                           cancelButtonIndex: CANCEL_INDEX,
                           destructiveButtonIndex: DESTRUCTIVE_INDEX,
                           title: "Masuk dengan Akun Media Sosial"
                        },
                        buttonIndex => {
                           this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                        )}>
                     <Text>Akun Media Sosial</Text>
                  </Button>
                     */
}
