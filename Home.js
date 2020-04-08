import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const goToLogin = () => {
        Actions.login()
    }
    const goToRegister = () => {
        Actions.login()
    }
    return (
        <View>
            <TouchableOpacity style={{ margin: 128 }} onPress={goToLogin}>
                <Text>Go to Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 128 }} onPress={goToRegister}>
                <Text>Go to Register</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home