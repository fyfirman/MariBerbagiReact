import React, {Component} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const goToHome = () => {
    Actions.home()
}

export default class Thankyou extends Component {
    static navigationOptions = {
        //To hide the NavigationBar from current Screen
        header: null
    };
    
    render() {
        return (
            <View style={styles.page}>
                <View>
                    <Image source={require('./assets/images/bigThanks.png')} style={styles.bigThanksWrap} />
                </View>
                <View style={styles.thxMessageWrap}>
                    <Text style={styles.thxMessage}>
                        Terima kasih telah menjadi bagian dari agen penebar manfaat dengan menyumbangkan barang layak gunamu.
                    </Text>
                </View>
                <View style={styles.okeButtonWrap}>
                    <Button block style={styles.okeButton} onPress={goToHome}>
                        <Text style={styles.tulisanButton}>OKE</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    page: {
        flex: 1,
        backgroundColor: '#F05E23',
    },
    bigThanksWrap: {
        marginTop: 80,
        marginHorizontal: 60,
        alignContent: 'center',
        justifyContent: 'center',
    },
    thxMessageWrap: {
        paddingTop: 50,
        paddingHorizontal: 50,
    },
    thxMessage: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    okeButtonWrap: {
        paddingHorizontal: 50,
        paddingTop: 30,
    },
    okeButton: {
        backgroundColor: 'white', 
        borderRadius: 5,
    },
    tulisanButton: {
        fontFamily: 'Montserrat-Regular',
        fontSize : 12,
        color: '#F05E23',
    },
});
