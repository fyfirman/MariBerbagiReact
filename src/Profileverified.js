import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image,
    } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Root, 
         Content, 
         Card,  
         Button, 
         Container 
    } from 'native-base';
import BottomNav from '../components/bottomNavbar';

export default class Profileverified extends Component{
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Root>
                <Container>
                    <Content>
                        <View style={styles.header}>
                            <Image source={require('../assets/images/macOS5.jpg')} style={styles.profpic} />

                            <View style={styles.aboutAkun}>
                                <Text style={styles.uname}>Kevin Akbar</Text>

                                <View style={styles.verifStatus}>
                                    <Image source={require('../assets/icons_real/centang_verified.png')} />
                                    <Text style={styles.verif}>Akun Terverifikasi</Text>
                                </View>
                            </View>

                            <Image source={require('../assets/icons_real/Setting.png')} style={styles.setting} />
                        </View>

                        <Card style={styles.cardUtama}>

                            <View style={styles.ket1}>
                                <Text style={styles.ketSaya}>Sumbangan saya</Text>
                                <Text style={styles.ketSemua}>Lihat Semua</Text>
                            </View>

                            <View style={styles.kartuBarang}>

                                <View style={{flexDirection: 'column'}}>
                                    <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />                        
                                    <View style={styles.boxKet}>
                                        <Text>Pakaian Bekas Warna Biru</Text>
                                            <View style={styles.isiKet}>
                                                <Text style={styles.ketBarang}>Kondisi 70%</Text>
                                                <Text style={styles.ketBarang}>3 Peminat</Text>
                                            </View>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'column'}}>
                                    <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />                        
                                    <View style={styles.boxKet}>
                                        <Text>Pakaian Bekas Warna Biru</Text>
                                        <View style={styles.isiKet}>
                                            <Text style={styles.ketBarang}>Kondisi 70%</Text>
                                            <Text style={styles.ketBarang}>3 Peminat</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.ket2}>
                                <Text style={styles.ketSaya}>Minat saya</Text>
                                <Text style={styles.ketSemua}>Lihat Semua</Text>
                            </View>

                            <View style={styles.kartuBarang}>

                                <View style={{flexDirection: 'column'}}>
                                    <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />                        
                                    <View style={styles.boxKet}>
                                        <Text>Pakaian Bekas Warna Biru</Text>
                                        <View style={styles.isiKet}>
                                            <Text style={styles.ketBarang}>Kondisi 70%</Text>
                                            <Text style={styles.ketBarang}>3 Peminat</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'column'}}>
                                    <Image source={require('../assets/images/macOS5.jpg')} style={styles.fotoBarang} />                        
                                    <View style={styles.boxKet}>
                                        <Text>Pakaian Bekas Warna Biru</Text>
                                        <View style={styles.isiKet}>
                                            <Text style={styles.ketBarang}>Kondisi 70%</Text>
                                            <Text style={styles.ketBarang}>3 Peminat</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <Text style={styles.myCampaign}>Kampanye Saya</Text>
                            <Button block style={styles.buttonPrimary}>
                                <Text style={styles.tulisanButton}>BUAT KAMPANYE</Text>
                            </Button>

                        </Card>
                    </Content>

                    <View style={styles.navbar}>
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
        height: 155,
        flexDirection: 'row',
    },
    profpic: {
        marginLeft: 30,
        marginTop: 30,
        width: 70,
        height: 70,
        borderRadius: 70/ 2,
    },
    aboutAkun: {
        flexDirection: 'column',
        paddingLeft: 20,
        paddingTop: 40,
    },
    uname: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 16,
        color: 'white'
    },
    verifStatus: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    verif: {
        paddingLeft: 5,
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'white',
    },
    setting: {
        marginTop: 25,
        marginLeft: 70,
    },
    cardUtama: {
        borderRadius:20,
        padding: 15,
        marginTop:-40,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20,
    },
    ket1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 7,
        paddingBottom: 10,
    },
    ketSaya: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'grey',
    },
    ketSemua: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: '#F05E23',
    },
    kartuBarang: {
        flexDirection: 'row',
        paddingBottom: 5,
        overflow: 'hidden',
    },
    fotoBarang: {
        height: 100,
        width: 140,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius:5,
        borderBottomLeftRadius: 5,
        justifyContent: 'space-between',
        margin: 5,
    },
    boxKet: {
        padding: 5, 
        width: 130,
    },
    isiKet: {
        flexDirection: 'row', 
        paddingTop: 5, 
        justifyContent: 'space-between',
    },
    ketBarang: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: 'grey',
    },
    ket2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 7,
    },
    myCampaign: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'grey',
        paddingHorizontal: 7,
    },
    ketMyCampaign: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 10,
        color: 'grey',
        paddingHorizontal: 7,
        paddingTop: 5,
    },
    buttonPrimary: {
        backgroundColor: '#F05E23',
        marginVertical:5,
        borderRadius:5,
    },
    tulisanButton: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: 'white',
    },
});
