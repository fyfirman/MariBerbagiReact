import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Root, Container, Content, H2 } from 'native-base';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DeskripsiBarang from '../components/deskripsiBarang';
import PeminatBarang from '../components/peminatBarang';
import DiskusiBarang from '../components/diskusiBarang';
import Axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

const goToListbarang = () => {
  Actions.pop();
};

export default class Detailbarang extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      stuff: [],
      owner: [],
      val: 1,
      jumPeminat: 0,
    };
  }

  goToRequest = () => {
    Actions.request({ stuff_id: this.props.stuff_id });
  };

  renderElement() {
    if (this.state.val == 'diskusiBarang') {
      return <DiskusiBarang />;
    } else if (this.state.val == 'peminatBarang') {
      return <PeminatBarang />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{this.state.stuff.description}</Text>
        </View>
      );
    }
  }

  async componentDidMount() {
    await Axios.get(BASE_URL + '/api/stuff/' + this.props.stuff_id)
      .then(data => {
        this.setState({
          stuff: data.data.Stuff[0],
        });
        console.log(data.data.Stuff[0]);
      })
      .catch(error => {
        console.log(error);
      });
    await Axios.get(BASE_URL + '/api/user/' + this.state.stuff.owner_id)
      .then(data => {
        this.setState({
          owner: data.data.User[0].profile[0],
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
          {console.log(this.state.owner.name)}
          <View style={styles.header}>
            <View>
              <IconIonicons
                onPress={goToListbarang}
                name="ios-arrow-round-back"
                style={styles.arrow}
              />
            </View>
            <View style={styles.barWrapper}>
              <H2 style={{ fontSize: 20, color: '#ffffff', fontFamily: 'Montserrat-Bold', paddingLeft: 20 }}>
                Detail Barang
              </H2>
              {/* <TextInput
                placeholder="Cari Barang Sumbangan"
                placeholderTextColor="black"
                style={styles.searchBar}
              /> */}
              {/* <Image
                source={require('../../assets/images/search.png')}
                style={styles.searchLogo}
              /> */}
            </View>
          </View>

          <Content style={styles.content}>
            <View style={styles.view}>
              <Image
                rounded
                style={styles.image1}
                //resizeMode="contain"
                source={{
                  uri: `${BASE_URL}/${this.state.stuff.picture}`,
                }}
              />
            </View>
            {/*<View style={styles.view2}>
              <Image
                style={styles.image2}
                //resizeMode="contain"
                source={require('../../assets/images/macOS5.jpg')}
              />
              <Image
                style={styles.image3}
                //resizeMode="contain"
                source={require('../../assets/images/macOS5.jpg')}
              />
            </View>*/}

            <View>
              <Text style={styles.namaBarang}>{this.state.stuff.name}</Text>
              {/*Pengirim*/}
              <Text style={styles.namaPengirim}>
                Dari {this.state.owner.name}
              </Text>
              <View style={styles.ket}>
                {/*Kondisi Barang*/}
                <Text style={styles.ketBarang}>
                  Kondisi {this.state.stuff.condition} {'  '}
                </Text>
                {/*Penanggung Ongkir*/}
                <Text style={styles.ketBarang}>
                  {this.state.stuff.postal_fee ? (
                    <Text>Ongkos Kirim ditanggung Penerima</Text>
                  ) : (
                      <Text>Ongkos Kirim ditanggung Pengirim</Text>
                    )}
                </Text>
              </View>
              <View style={styles.ket}>
                {/*Lokasi Barang*/}
                <Text style={styles.ketBarang}>
                  {this.state.stuff.address} {'  '}
                </Text>
                {/*Kategori Barang*/}
                {/*<Text style={styles.ketBarang}>Kategori Pakaian</Text>*/}
                {/*COD*/}
                {this.state.stuff.is_cod ? <Text>Bisa COD</Text> : <Text />}
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.garis}>
                <TouchableOpacity
                  style={styles.frag}
                  onPress={() => this.setState({ val: 'deskripsiBarang' })}>
                  <Text style={styles.txtFrag}>Deskripsi</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.garis}>
                <TouchableOpacity
                  style={styles.frag}
                  onPress={() => this.setState({ val: 'peminatBarang' })}>
                  <Text style={styles.txtFrag}>
                    {this.state.jumPeminat} Peminat
                  </Text>
                </TouchableOpacity>
              </View> */}

              {/* <View style={styles.garis}>
                <TouchableOpacity
                  style={styles.frag}
                  onPress={() => this.setState({ val: 'diskusiBarang' })}>
                  <Image
                    source={require('../../assets/icons_real/icon_diskusi.png')}
                  />
                  <Text style={styles.txtFrag}>Diskusi</Text>
                </TouchableOpacity>
              </View> */}
            </View>

            <View>{this.renderElement()}</View>
          </Content>

          <TouchableOpacity style={styles.buttonMinat} onPress={this.goToRequest}>
            <Text style={styles.textMinat}>MINAT MENERIMA</Text>
          </TouchableOpacity>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F05E23',
    borderBottomLeftRadius: 30,
    position: 'relative',
    flexDirection: 'row',
    height: 75,
    alignItems: 'center',
    paddingLeft: 20,
  },
  arrow: {
    marginTop: 6,
    marginLeft: 5,
    fontSize: 40,
    color: 'white',
  },
  barWrapper: {
    paddingLeft: 0,
    marginVertical: 8,
  },
  searchBar: {
    borderWidth: 2,
    borderColor: '#E4E4E4',
    borderRadius: 10,
    height: 40,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 85,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  searchLogo: {
    position: 'absolute',
    top: 8,
    left: 20,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 15,
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flexDirection: 'row',
  },
  image1: {
    marginTop: 10,
    width: 320,
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
  },
  image2: {
    width: 50,
    height: 50,
    marginVertical: 7,
    marginRight: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image3: {
    width: 50,
    height: 50,
    marginVertical: 7,
    marginHorizontal: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  namaBarang: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 19,
  },
  namaPengirim: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#ff8c00',
    fontSize: 13,
  },
  ket: {
    flexDirection: 'row',
  },
  ketBarang: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#a9a9a9',
  },
  frag: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 2,
    flexDirection: 'row',
  },
  garis: {
    borderBottomWidth: 3,
    borderColor: 'coral',
    marginRight: 15,
  },
  txtFrag: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#F05E23',
    paddingLeft: 4,
  },
  buttonMinat: {
    marginHorizontal: 14,
    backgroundColor: '#F05E23',
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMinat: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: 'white',
  },
  container: {
    paddingTop: 15,
    paddingBottom: 50,
    marginRight: 5,
  },
  paragraph: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },
});
