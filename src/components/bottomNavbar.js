import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToListBarang = () => {
  Actions.listbarang();
};

const goToListKampanye = () => {
  Actions.listkampanye();
};

const goToBerbagiBarang = () => {
  Actions.berbagibarang();
};

//const goToChat = () => {
//    Actions.chat();
//}

const goToProfile = () => {
  Actions.profile();
};

export default class bottomNavbar extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.isiNavbar}>
          <TouchableOpacity style={styles.icon} onPress={goToListBarang}>
            <Image
              style={{ color: '#F05E23' }}
              source={require('../../assets/icons_real/search_on.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.isiNavbar}>
          <TouchableOpacity style={styles.icon} onPress={goToListKampanye}>
            <Image source={require('../../assets/icons_real/kampanye.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.iconPost} onPress={goToBerbagiBarang}>
            <Image source={require('../../assets/icons_B/post_B.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.isiNavbar}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../../assets/icons_real/chat.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.isiNavbar}>
          <TouchableOpacity style={styles.icon} onPress={goToProfile}>
            <Image source={require('../../assets/icons_real/user.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: 20,
  },
  isiNavbar: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconPost: {
    marginTop: -10,
  },
});

{
  /*
          <Footer>
            <FooterTab>
              <Button>
                <Icon type="FontAwesome" name="search" />
              </Button>
              <Button>
                <Icon type="AntDesign" name="notification" />
              </Button>
              <Button active>
                <Icon active type="FontAwesome" name="plus-circle" />
              </Button>
              <Button>
                <Icon type="MaterialIcons" name="chat" />
              </Button>
              <Button>
                <Icon name="person" />
              </Button>
            </FooterTab>
          </Footer>
          */
}
