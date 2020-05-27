import React, {Component} from 'react';
import { TextInput,
         StyleSheet,
         TouchableOpacity,
        } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Textarea,
  Text,
  Form,
  Content,
  Footer,
  FooterTab,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const goToDetailBarang = () => {
    Actions.detailbarang()
}

export default class Request extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#F05E23'}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" onPress={goToDetailBarang} />
            </Button>
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
                color: 'white',
              }}>
              Minat Menerima Pakaian Bekas Warna Biru
            </Text>
          </Body>
        </Header>
        <Content style={{padding: 15}}>
          <Form>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}>
              Alamat Pengiriman:
            </Text>
            <TextInput
              placeholder="Masukkan alamat"
              onChangeText={TextInputName => this.setState({TextInputName})}
              style={{
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 10,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}>
              Nomor HP:
            </Text>
            <TextInput
              placeholder="Masukkan nomor HP"
              keyboardType="phone-pad"
              onChangeText={TextInputName => this.setState({TextInputName})}
              style={{
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 10,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}>
              Alasan Request :
            </Text>
            <Textarea
              rowSpan={5}
              style={{
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 5,
                fontSize: 12,
                fontFamily: 'Montserrat-Regular',
              }}
              placeholder="Tuliskan alasan kamu berhak menerima sumbangan tersebut"
            />
          </Form>
        </Content>
        
        <TouchableOpacity style={styles.buttonMinat}>
            <Text style={styles.textMinat}>KIRIM</Text>
        </TouchableOpacity>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFE8C5',
      borderRadius: 5,
    },
    buttonMinat: {
      backgroundColor: '#F05E23',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textMinat: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      color: 'white',
    },
});