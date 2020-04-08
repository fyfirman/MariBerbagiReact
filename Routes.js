import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Register} title="Register" />
        </Scene>
    </Router>
)
export default Routes