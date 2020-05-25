import React, { Component } from 'react';
import { StyleSheet, 
         View, 
         Text, 
         Image, 
         TextInput, 
    } from 'react-native';
import { Root, 
         Container, 
         Content 
    } from 'native-base';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import BottomNav from '../components/bottomNavbar';

export default class Listkampanye extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Root>
                <Container>
                    <Content>
                        <View style={styles.header}>
                            <View style={styles.barWrapper}>
                                <TextInput placeholder="Cari Kampanye" placeholderTextColor='#494949' style={styles.searchBar}/>
                                <IconAwesome name="search" size={20} color="#494949" style={styles.searchLogo}/>
                            </View>
                            <View style={styles.fiturAtas}>
                                <IconAwesome name="sort-numeric-asc" size={25} color="white" />
                                <Text style={styles.ketFitur}>Urutkan {" "} </Text>
                                <IconAwesome name="filter" size={25} color="white" />
                                <Text style={styles.ketFitur}>Saring</Text>
                            </View>
                        </View>

                        <View style={styles.cardKampanye}>
                            <Image source={require('../assets/images/macOS5.jpg')} style={styles.foto}/>
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
                            <Image source={require('../assets/images/macOS5.jpg')} style={styles.foto}/>
                            <View style={styles.isiKampanye}>
                                <Text style={styles.judulKampanye}>Butuh 20 Lusin Pakaian Bekas untuk Korban Gempa Sulawesi</Text>
                                <Text style={styles.deadline}>Hingga 1 Desember 2020</Text>
                                <View style={styles.ketKampanye}>
                                    <Text style={styles.detail}>1000 Calon Penumpang {"    "} </Text>
                                    <Text style={styles.detail}>20 Telah Menyumbang</Text>
                                </View>
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
        backgroundColor: '#FFE8C5',
        borderColor: '#FD7713',
        borderRadius: 5,
        height: 40,
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
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
        alignItems: 'center',
    },
    ketFitur: {
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        paddingLeft: 5,
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
});
