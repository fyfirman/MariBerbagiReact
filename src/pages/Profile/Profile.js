import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Root, Container, Content, Card } from 'native-base';
import BottomNav from '../../components/bottomNavbar';
import Axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';
import { Col, Grid } from 'react-native-easy-grid';
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
      stuffs: [],
    };
  }

  componentDidMount = async () => {
    // await Axios.get(BASE_URL + '/api/user/' + GLOBAL.USER_ID)
    await Axios.get(BASE_URL + '/api/user/5ed49dd59c24953f4c084309')
      .then(res => {
        this.setState({
          user: res.data.User[0],
        });
        console.log('Fetch data user : ', this.state.user.profile[0]);
      })
      .catch(error => {
        console.log(error.response.data);
      });

    await Axios.get(BASE_URL + '/api/stuff?owner_id=5ed49dd59c24953f4c084309')
      .then(res => {
        this.setState({
          stuffs: res.data.Stuff,
        });
        console.log('Fetch data stuff : ', res.data.Stuff);
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

              <Grid style={styles.kartuBarang}>
                {this.state.stuffs.map((stuff, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{ flexDirection: 'column' }}
                      onPress={this.goToStatusBarang}>
                      <Col size={50}>
                        <Image
                          source={{
                            uri: `${BASE_URL}/${stuff.picture}`,
                          }}
                          style={styles.fotoBarang}
                        />
                        <View style={styles.boxKet}>
                          <Text>{stuff.name}</Text>
                          <View style={styles.isiKet}>
                            <Text style={styles.ketBarang}>
                              Kondisi {stuff.condition == 'new' ? 'Baru' : 'Bekas'} -
                            </Text>
                            <Text style={styles.ketBarang}>Tersedia {stuff.amount}</Text>
                          </View>
                        </View>
                      </Col>
                    </TouchableOpacity>
                  );
                })}
              </Grid>
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
