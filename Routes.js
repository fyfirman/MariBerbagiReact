import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'
import Detailbarang from './Detailbarang.js'
import Detailkampanye from './Detailkampanye.js'
import Berbagibarang from './Berbagibarang.js'
import Welcome from './Welcome.js'
import Thankyou from './Thankyou.js'
import Profile from './Profile.js'
import Profileverified from './Profileverified.js'
import Listkampanye from './Listkampanye.js';

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial={true} />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Register} title="Register" />
            <Scene key="detailbarang" component={Detailbarang} title="Detailbarang" />
            <Scene key="detailkampanye" component={Detailkampanye} title="Detailkampanye" />
            <Scene key="berbagibarang" component={Berbagibarang} title="Berbagibarang" />
            <Scene key="welcome" component={Welcome} title="Welcome" />
            <Scene key="thankyou" component={Thankyou} title="Thankyou" />
            <Scene key="profile" component={Profile} title="Profile" />
            <Scene key="profileverified" component={Profileverified} title="Profileverified" />
            <Scene key="listkampanye" component={Listkampanye} title="Listkampanye" />
        </Scene>
    </Router>
)
export default Routes
