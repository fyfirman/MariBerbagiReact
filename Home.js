import React from 'react'
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text } from 'native-base';

const Home = () => {
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 16,
            paddingVertical: 8
        },
        button: {
            width: 100,
            marginBottom: 8
        }
    });

    const goToLogin = () => {
        Actions.login()
    }
    const goToRegister = () => {
        Actions.register()
    }
    const goToDetailBarang = () => {
        Actions.detailbarang()
    }
    const goToBerbagiBarang = () => {
        Actions.berbagibarang()
    }
    const goToDetailKampanye = () => {
        Actions.detailkampanye()
    }
    const goToWelcome = () => {
        Actions.welcome()
    }
    const goToThankyou = () => {
        Actions.thankyou()
    }
    const goToProfile = () => {
        Actions.profile()
    }
    const goToProfileverified = () => {
        Actions.profileverified()
    }
    const goToListkampanye = () => {
        Actions.listkampanye()
    }
    
    return (
        <Container style={styles.container}>
            <Content>
                <Button onPress={goToLogin} style={styles.button}>
                    <Text>Login</Text>
                </Button>
                <Button bordered onPress={goToRegister} style={styles.button}>
                    <Text>Register</Text>
                </Button>
                <Button bordered onPress={goToDetailBarang} style={styles.button}>
                    <Text>Detail Barang</Text>
                </Button>
                <Button onPress={goToBerbagiBarang} style={styles.button}>
                    <Text>Berbagi Barang</Text>
                </Button>
                <Button bordered onPress={goToDetailKampanye} style={styles.button}>
                    <Text>Detail Kampanye</Text>
                </Button>
                <Button bordered onPress={goToWelcome} style={styles.button}>
                    <Text>Welcome</Text>
                </Button>
                <Button bordered onPress={goToThankyou} style={styles.button}>
                    <Text>Thankyou</Text>
                </Button>
                <Button bordered onPress={goToProfile} style={styles.button}>
                    <Text>Profile</Text>
                </Button>
                <Button bordered onPress={goToProfileverified} style={styles.button}>
                    <Text>Profile Verified</Text>
                </Button>
                <Button bordered onPress={goToListkampanye} style={styles.button}>
                    <Text>List Kampanye</Text>
                </Button>
            </Content>
        </Container>
    )
}
export default Home