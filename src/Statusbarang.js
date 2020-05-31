import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,   
    } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Root,
    Container,
    Content,
    } from 'native-base';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import BottomNav from '../components/bottomNavbar';

const goToProfile = () => {
    Actions.profile();
}

export default class Statusbarang extends Component {
    static navigationOptions = {
        header: null,
    };
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
            <Root>
                <Container>

                    <Content>

                        <View style={styles.header}>
                            <IconIonicons onPress={goToProfile} name="ios-arrow-round-back" size={40} color="#FFFFFF" style={styles.arrow} />
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={styles.judul}>BARANG</Text>
                                <View style={styles.iconHeader} >
                                    <IconMaterial name="search" size={25} color="#FFFFFF" />
                                    <IconCommunity name="filter-outline" size={25} color="#FFFFFF" />
                                </View>
                            </View>
                        </View>

                        <View style={styles.cardBarang}>
                            <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />
                            <View style={styles.ketBarang}>
                                <Text style={styles.namaBarang}>Baju Biru</Text>
                                <Text style={styles.descBarang}>Pakaian bekas warna biru. Birunya enggak seperti langit, agak tua sedikit.</Text>
                            </View>
                        </View>

                        <Text style={styles.subjudul}>PEMINAT</Text>
                        
                        <View style={styles.containerPeminat}>
                            
                            {/*Card Peminat ke-1*/}
                            <View style={styles.cardPeminat}>
                                <View style={{ width: 255, paddingRight: 10, }}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                        <Text style={styles.namaPeminat} >Deden Alsebai</Text>
                                        <Text style={styles.tglMinat} >08 Maret 2020</Text>
                                    </View>
                                    <Text style={styles.descMinat}>Barangnya akan langsung saya serahkan ke mereka yang membutuhkan mas..</Text>
                                </View>
                                <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />
                            </View>

                            {/*Card Peminat ke-2*/}
                            <View style={styles.cardPeminat}>
                                <View style={{ width: 255, paddingRight: 10, }}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                        <Text style={styles.namaPeminat} >Febri Hendrawan</Text>
                                        <Text style={styles.tglMinat} >10 Maret 2020</Text>
                                    </View>
                                    <Text style={styles.descMinat}>Barangnya akan langsung saya serahkan ke mereka yang membutuhkan mas..</Text>
                                </View>
                                <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />
                            </View>

                            {/*Card Peminat ke-3*/}
                            <View style={styles.cardPeminat}>
                                <View style={{ width: 255, paddingRight: 10,}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                        <Text style={styles.namaPeminat} >Ezechiel Baumann</Text>
                                        <Text style={styles.tglMinat} >13 Maret 2020</Text>
                                    </View>
                                    <Text style={styles.descMinat}>Barangnya akan langsung saya serahkan ke mereka yang membutuhkan mas..</Text>
                                </View>
                                <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />
                            </View>

                        </View>

                        
                            

                    </Content>

                    <View>
                        <BottomNav />
                    </View>

                </Container>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F05E23',
        height: 90,
    },
    arrow: {
        paddingLeft: 20,
    },
    judul: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 26,
        color: '#FFFFFF',
        paddingLeft: 20,
    },
    iconHeader: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 140,
    },
    cardBarang: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 10,
    },
    fotoBarang: {
        height: 70,
        width: 70,
        borderRadius: 70/ 2,
    },
    ketBarang: {
        paddingLeft: 10,
        width: 250,
    },
    namaBarang: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    descBarang : {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    subjudul: {
        paddingVertical: 10,
        marginHorizontal: 15,
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        color: '#F05E23',
        alignSelf: 'center',
    },
    containerPeminat: {
        marginHorizontal: 15,
    },
    cardPeminat: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    namaPeminat: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'black',
    },
    tglMinat: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#F05E23',
        justifyContent: 'flex-end',
    },
    descMinat: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'black',
        paddingTop: 10,
        lineHeight: 20,
    },
    peminat: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
    },
    teksPeminat: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: '#FFFFFF',
    },
});
