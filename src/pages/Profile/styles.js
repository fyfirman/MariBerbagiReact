import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#F05E23',
    height: 155,
    flexDirection: 'row',
  },
  profpic: {
    marginLeft: 30,
    marginTop: 30,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  aboutAkun: {
    flexDirection: 'column',
    paddingLeft: 20,
    paddingTop: 40,
  },
  uname: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 16,
    color: 'white',
  },
  verifStatus: {
    paddingTop: 5,
    flexDirection: 'row',
  },
  verif: {
    paddingTop: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: 'white',
  },
  setting: {
    marginTop: 25,
    marginLeft: 30,
  },
  cardUtama: {
    borderRadius: 20,
    padding: 15,
    marginTop: -40,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  ket1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingBottom: 10,
  },
  ketSaya: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: 'grey',
  },
  ketSemua: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#F05E23',
  },
  kartuBarang: {
    flexDirection: 'row',
    paddingBottom: 5,
    overflow: 'hidden',
  },
  fotoBarang: {
    height: 100,
    width: 140,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'space-between',
    margin: 5,
  },
  boxKet: {
    padding: 5,
    width: 130,
  },
  isiKet: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
  },
  ketBarang: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'grey',
  },
  ket2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 7,
  },
  myCampaign: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: 'grey',
    paddingHorizontal: 7,
  },
  ketMyCampaign: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: 'grey',
    paddingHorizontal: 7,
    paddingTop: 5,
  },
});