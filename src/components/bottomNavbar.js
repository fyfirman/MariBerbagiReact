import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

const goToListBarang = () => {
  Actions.listbarang();
};

const goToListKampanye = () => {
  Alert.alert('Segera hadir', 'Fitur kampanye akan segera tiba! Tunggu nanti');
};

const goToBerbagiBarang = () => {
  Actions.addStuff();
};

const goToChat = () => {
  Alert.alert('Segera hadir', 'Fitur obrolan akan segera tiba! Tunggu nanti');
};

const goToProfile = () => {
  Actions.profile();
};

export default class bottomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.isiNavbar}>
          <TouchableOpacity
            style={styles.icon}
            onPress={goToListBarang}
            disabled={this.props.active === 'stuff'}>
            <Image
              source={
                this.props.active === 'stuff'
                  ? require('../../assets/icons_real/search_on.png')
                  : require('../../assets/icons_real/search.png')
              }
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
            <Image
              source={require('../../assets/icons_B/post_A.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.isiNavbar}>
          <TouchableOpacity style={styles.icon} onPress={goToChat}>
            <Image source={require('../../assets/icons_real/chat.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.isiNavbar}>
          <TouchableOpacity
            style={styles.icon}
            onPress={goToProfile}
            disabled={this.props.active === 'profile'}>
            <Image
              source={
                this.props.active === 'profile'
                  ? require('../../assets/icons_real/user_active.png')
                  : require('../../assets/icons_real/user.png')
              }
            />
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
    marginTop: -18,
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
