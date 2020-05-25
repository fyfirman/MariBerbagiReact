import React, { Component } from 'react'
import { StyleSheet, 
         View, 
         Image, 
         TextInput,
         Text,
         TouchableOpacity, 
    } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Root,
         Container,
         Content, 
    } from 'native-base';
import ButtonPrimary from './elements/ButtonPrimary';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DeskripsiBarang from '../components/deskripsiBarang';
import PeminatBarang from '../components/peminatBarang';
import DiskusiBarang from '../components/diskusiBarang';

const goToHome = () => {
   Actions.home()
}

export default class Detailbarang extends Component{
    static navigationOptions = {
      header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            jumPeminat : 3,
        };
    }

    renderElement(){
        if(this.state.val == 'diskusiBarang'){
            return <DiskusiBarang />;
        } else if(this.state.val == 'peminatBarang'){
            return <PeminatBarang />;
        } else {
            return <DeskripsiBarang />;
        }
    }

    render() {
      return (
        <Root>
            <Container>
                    
                <View style={styles.header}>
                    <View>    
                        <IconIonicons onPress = {goToHome} name='ios-arrow-round-back' style={styles.arrow}/>
                    </View>
                    <View style={styles.barWrapper}>
                        <TextInput placeholder="Cari Barang Sumbangan" placeholderTextColor='black' style={styles.searchBar}/>
                        <Image source={require('../assets/images/search.png')} style={styles.searchLogo}/>
                    </View>
                </View>

                <Content style={styles.content}>

                    <View style={styles.view}>
                        <Image 
                            rounded
                            style={styles.image1}
                            //resizeMode="contain"
                            source={require('../assets/images/macOS5.jpg')}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Image 
                            style={styles.image2}
                            //resizeMode="contain"
                            source={require('../assets/images/macOS5.jpg')}
                        />
                        <Image 
                            style={styles.image3}
                            //resizeMode="contain"
                            source={require('../assets/images/macOS5.jpg')}
                        />
                    </View>

                    <View>
                        <Text style={styles.namaBarang}>Pakaian Bekas Warna Biru</Text>
                        {/*Pengirim*/}
                        <Text style={styles.namaPengirim}>Dari Kevin Akbar Adhiguna</Text>
                        <View style={styles.ket}>
                            {/*Kondisi Barang*/}
                            <Text style={styles.ketBarang}>Kondisi 70% {"  "}</Text>
                            {/*Kategori Barang*/}
                            <Text style={styles.ketBarang}>Kategori Pakaian</Text>
                        </View>
                        <View style={styles.ket}>
                            {/*Lokasi Barang*/}
                            <Text style={styles.ketBarang}>Sumatera Utara {"  "}</Text>
                            {/*Penanggung Ongkir*/}
                            <Text style={styles.ketBarang}>Ongkos Kirim ditanggung Penerima</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        
                        <View style={styles.garis}>
                            <TouchableOpacity 
                                style={styles.frag}
                                onPress={() => this.setState({ val: 'deskripsiBarang' })}
                            >
                                <Image source={require('../assets/icons_real/icon_deskripsi.png')} />
                                <Text style={styles.txtFrag}>Deskripsi</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.garis}>
                            <TouchableOpacity 
                                style={styles.frag}
                                onPress={() => this.setState({ val: 'peminatBarang' })}
                            >
                                <Text style={styles.txtFrag}>{this.state.jumPeminat} Peminat</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.garis}>
                            <TouchableOpacity 
                                style={styles.frag}
                                onPress={() => this.setState({ val: 'diskusiBarang' })}
                            >
                                <Image source={require('../assets/icons_real/icon_diskusi.png')} />
                                <Text style={styles.txtFrag}>Diskusi</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        {this.renderElement()}
                    </View>
                    
                </Content>

                <View style={styles.buttonMinat}>
                        <ButtonPrimary text="MINAT MENERIMA" /*onPress={}*/ ></ButtonPrimary>
                </View>

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
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    arrow: {
        marginTop: 6,
        marginLeft: 5,
        fontSize: 40,
        color: 'white',
    },
    barWrapper: {
        paddingLeft: 5,
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
        fontFamily: "Montserrat-Regular",
        fontSize: 19,
    },
    namaPengirim: {
        fontFamily: "Montserrat-SemiBold",
        color: '#ff8c00',
        fontSize: 13,
    },
    ket: {
        flexDirection: 'row',
    },
    ketBarang: {
        fontFamily: "Montserrat-Regular",
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
        color : '#F05E23',
        paddingLeft: 4,
    },
    buttonMinat: {
        paddingHorizontal:5,
    },
});
