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
    return (
        <Container style={styles.container}>
            <Content>
                <Button onPress={goToLogin} style={styles.button}>
                    <Text>Login</Text>
                </Button>
                <Button bordered onPress={goToRegister} style={styles.button}>
                    <Text>Register</Text>
                </Button>
            </Content>
        </Container>
    )
}
export default Home