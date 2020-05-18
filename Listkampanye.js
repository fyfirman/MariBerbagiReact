import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Input, ScrollView, Button } from 'react-native';
import { Container, Content, Footer, Tab } from 'native-base';

export default class Listkampanye extends Component {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null
    }

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ScrollView>

                <View style={styles.header}>
                    <View style={styles.barWrapper}>
                        <TextInput placeholder="Cari Kampanye" placeholderTextColor='grey' style={styles.searchBar}/>
                        <Image source={require('./assets/images/search.png')} style={styles.searchLogo}/>
                    </View>
                    <View style={styles.fiturAtas}>
                        <Image source={require('./assets/icons_A/sort_A.png')} style={styles.iconAtas}/>
                        <Text style={styles.ketFitur}>Urutkan {" "} </Text>
                        <Image source={require('./assets/icons_A/filter_A.png')} style={styles.iconAtas}/>
                        <Text style={styles.ketFitur}>Saring</Text>
                    </View>
                </View>

                <View style={styles.cardKampanye}>
                    <Image source={require('./assets/images/macOS5.jpg')} style={styles.foto}/>
                    <View style={styles.isiKampanye}>
                        <Text style={styles.judulKampanye}>Butuh 20 Lusin Pakaian Bekas untuk Korban Gempa Sulawesi</Text>
                        <Text style={styles.deadline}>Hingga 1 Desember 2020</Text>
                        <View style={styles.ketKampanye}>
                            <Text style={styles.detail}>1000 Calon Penumpang {"    "} </Text>
                            <Text style={styles.detail}>20 Telah Menyumbang</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardKampanye}>
                    <Image source={require('./assets/images/macOS5.jpg')} style={styles.foto}/>
                    <View style={styles.isiKampanye}>
                        <Text style={styles.judulKampanye}>Butuh 20 Lusin Pakaian Bekas untuk Korban Gempa Sulawesi</Text>
                        <Text style={styles.deadline}>Hingga 1 Desember 2020</Text>
                        <View style={styles.ketKampanye}>
                            <Text style={styles.detail}>1000 Calon Penumpang {"    "} </Text>
                            <Text style={styles.detail}>20 Telah Menyumbang</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.navbar}>

                    <View style={styles.isiNavbar}>
                        <View style={styles.icon}>
                            <Image source={require('./assets/icons_real/search_on.png')}/>
                        </View>
                    </View>
                    <View style={styles.isiNavbar}>
                        <View style={styles.icon}>
                            <Image source={require('./assets/icons_real/kampanye.png')}/>
                        </View>
                    </View>
                    <View>
                        <View style={styles.iconPost}>
                            <Image source={require('./assets/icons_B/post_B.png')}/>
                        </View>
                    </View>
                    <View style={styles.isiNavbar}>
                        <View style={styles.icon}>
                            <Image source={require('./assets/icons_real/chat.png')}/>
                        </View>
                    </View>
                    <View style={styles.isiNavbar}>
                        <View style={styles.icon}>
                            <Image source={require('./assets/icons_real/user.png')}/>
                        </View>
                    </View>

                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F05E23',
        height: 105,
        borderBottomLeftRadius: 40,
        paddingLeft: 20,
        paddingTop: 7,
    },
    barWrapper: {
        marginVertical: 8,
    },
    searchBar: {
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#E4E4E4',
        borderRadius: 5,
        height: 40,
        fontSize: 13,
        paddingLeft: 45,
        marginRight: 30,
        marginLeft: 10,
    },
    searchLogo: {
        position: 'absolute',
        top: 8,
        left: 20,
    },
    fiturAtas: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
    iconAtas: {
        height: 20,
        width: 20,
    },
    ketFitur: {
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        paddingLeft: 5,
        paddingTop: 5,
    },
    cardKampanye: {
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    isiKampanye: {
        paddingTop: 5,
    },
    judulKampanye: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
    },
    deadline: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: 'coral',
    },
    ketKampanye: {
        flexDirection: 'row',
    },
    detail: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        color: 'grey',
    },
    foto: {
        height: 150,
        width: 300,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    navbar: {
        flex: 1,
        height: 50,
        width: 360,
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    isiNavbar: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    iconPost: {
        marginTop: -10,
    },
});
