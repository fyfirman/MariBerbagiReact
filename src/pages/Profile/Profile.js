import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Root, Container, Content, Card } from 'native-base';
import BottomNav from '../../components/bottomNavbar';
import Axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import GLOBAL from '../../global';
import customStyle from './styles';

const styles = customStyle;

export default class Profile extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount = async () => {
    console.log('GLOBAL.USER_ID', GLOBAL.USER_ID);
    await Axios.get(BASE_URL + '/api/user/' + GLOBAL.USER_ID)
      .then(res => {
        this.setState({
          user: res.data.User[0],
        });
        console.log('Fetch data user : ', this.state.user.profile[0]);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  goToStatusBarang = () => {
    Actions.statusbarang();
  };

  render() {
    return (
      <Root>
        <Container>
          <Content>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/images/macOS5.jpg')}
                style={styles.profpic}
              />

              <View style={styles.aboutAkun}>
                <Text style={styles.uname}>
                  {this.state.user ? this.state.user.profile[0].name : ''}
                </Text>
                <Text style={styles.verif}>
                  {this.state.user ? this.state.user.profile[0].email : ''}
                </Text>
              </View>
            </View>

            <Card style={styles.cardUtama}>
              <View style={styles.ket1}>
                <Text style={styles.ketSaya}>Sumbangan saya</Text>
              </View>

              <View style={styles.kartuBarang}>
                <TouchableOpacity
                  style={{ flexDirection: 'column' }}
                  onPress={this.goToStatusBarang}>
                  <Image
                    source={require('../../../assets/images/macOS5.jpg')}
                    style={styles.fotoBarang}
                  />
                  <View style={styles.boxKet}>
                    <Text>Pakaian Bekas Warna Biru</Text>
                    <View style={styles.isiKet}>
                      <Text style={styles.ketBarang}>Kondisi 70%</Text>
                      <Text style={styles.ketBarang}>3 Peminat</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flexDirection: 'column' }}
                  onPress={this.goToStatusBarang}>
                  <Image
                    source={require('../../../assets/images/macOS5.jpg')}
                    style={styles.fotoBarang}
                  />
                  <View style={styles.boxKet}>
                    <Text>Pakaian Bekas Warna Biru</Text>
                    <View style={styles.isiKet}>
                      <Text style={styles.ketBarang}>Kondisi 70%</Text>
                      <Text style={styles.ketBarang}>3 Peminat</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          </Content>

          <View>
            <BottomNav />
          </View>
        </Container>
      </Root>
    );
  }
}
