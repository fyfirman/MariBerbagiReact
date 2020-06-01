import React, { Component } from 'react';
import {
  Text,
  Image,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Grid } from 'react-native-easy-grid';
import {
  Root,
  Content,
  Container,
  Header,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import BottomNav from '../components/bottomNavbar';
import Axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const goToDetailbarang = () => {
  Actions.detailbarang();
};

export default class Pencarian extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      stuff: [],
    };
  }

  componentDidMount() {
    Axios.get(BASE_URL + '/api/stuff/')
      .then(data => {
        this.setState({
          stuff: data.data.Stuff,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Root>
        <Container>
          <Header style={{ backgroundColor: '#F05E23', height: 100 }}>
            <View
              style={{ flex: 1, flexDirection: 'column', paddingVertical: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Button transparent>
                  <IconSimple
                    name="grid"
                    style={{ marginRight: 10, fontSize: 25, color: 'white' }}
                  />
                </Button>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#FFE8C5',
                    borderColor: '#FD7713',
                    borderWidth: 2,
                    height: 40,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <IconAwesome name="search" size={20} color="#494949" />
                  </View>
                  <TextInput
                    placeholder="Cari Barang Sumbangan       "
                    style={{
                      paddingRight: 15,
                      fontFamily: 'Montserrat-Regular',
                    }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                  transparent
                  style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <IconAwesome
                    name="sort-numeric-asc"
                    size={25}
                    color="white"
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {' '}
                    Urutkan
                  </Text>
                </Button>
                <Button
                  transparent
                  style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  <IconAwesome name="filter" size={25} color="white" />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    Saring
                  </Text>
                </Button>
              </View>
            </View>
          </Header>

          <Content
            style={{
              paddingHorizontal: 15,
              paddingTop: 10,
              paddingBottom: 300,
            }}>
            {this.state.stuff.map((list, index) => (
              <Grid>
                <Col size={50} key={index}>
                  <TouchableWithoutFeedback onPress={goToDetailbarang}>
                    <Card>
                      <CardItem cardBody>
                        <Image
                          source={{
                            uri: `${BASE_URL}/${list.picture}`,
                          }}
                          style={{ height: 150, width: null, flex: 1 }}
                        />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text
                            style={{
                              fontSize: 12,
                              fontFamily: 'Montserrat-Bold',
                            }}>
                            {list.name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontFamily: 'Montserrat-Regular',
                            }}>
                            Kondisi {list.condition} - Jumlah {list.amount}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableWithoutFeedback>
                </Col>
              </Grid>
            ))}
            <View style={{ paddingVertical: 15 }} />
          </Content>

          <View>
            <BottomNav />
          </View>
        </Container>
      </Root>
    );
  }
}
