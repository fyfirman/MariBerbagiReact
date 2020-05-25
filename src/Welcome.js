import React, {Component} from 'react'
import { StyleSheet, 
         View, 
         Text, 
         ImageBackground 
    } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const goToRegister = () => {
    Actions.register()
}

export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/welcome.png')} style={styles.image}>
                    <Text style={styles.judul} >MARI BERBAGI</Text>
                    <Text style={styles.pesan}>
                        Mari berbagi adalah platform sumbangan barang layak guna bagi masyarakat Indonesia.
                    </Text>
                    <Button block style={styles.mulaiButton} onPress={goToRegister}>
                        <Text style={styles.tulisanButton}>MULAI</Text>
                    </Button>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    judul: {
        fontFamily: 'Montserrat-ExtraBold',
        fontSize: 26,
        color: 'white',
        position: 'absolute',
        top: 80,
        left: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    pesan: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: 'white',
        position: 'absolute',
        top: 420,
        left: 50,
        right: 50,
        textAlign: 'center',
    },
    mulaiButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 60,
        width: 200,
        backgroundColor: 'white', 
        borderTopLeftRadius: 50,
    },
    tulisanButton: {
        fontFamily: 'Montserrat-Regular',
        fontSize : 14,
        fontWeight: 'bold',
        color: '#F05E23',
    },
});
