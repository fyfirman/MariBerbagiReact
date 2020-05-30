import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';
import Detailbarang from './src/Detailbarang';
import Detailkampanye from './src/Detailkampanye';
import Berbagibarang from './src/Berbagibarang';
import Welcome from './src/Welcome';
import Thankyou from './src/Thankyou';
import Profile from './src/Profile';
import Profileverified from './src/Profileverified';
import Listkampanye from './src/Listkampanye';
import Listbarang from './src/Listbarang';
import Request from './src/Request';
import Aturanpenggunaan from './src/Aturanpenggunaan';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="detailbarang" component={Detailbarang} title="Detailbarang" />
      <Scene
        key="detailkampanye"
        component={Detailkampanye}
        title="Detailkampanye"
      />
      <Scene
        key="berbagibarang"
        component={Berbagibarang}
        title="Berbagibarang"
      />
      <Scene key="welcome" component={Welcome} title="Welcome" />
      <Scene key="thankyou" component={Thankyou} title="Thankyou" />
      <Scene key="profile" component={Profile} title="Profile" />
      <Scene
        key="profileverified"
        component={Profileverified}
        title="Profileverified"
      />
      <Scene key="listkampanye" component={Listkampanye} title="Listkampanye" />
      <Scene key="listbarang" component={Listbarang} title="Listbarang" />
      <Scene key="request" component={Request} title="Request" />
      <Scene
        key="aturanpenggunaan"
        component={Aturanpenggunaan}
        title="Aturanpenggunaan"
      />
    </Scene>
  </Router>
);
export default Routes;
