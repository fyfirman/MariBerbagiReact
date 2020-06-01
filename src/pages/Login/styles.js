import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#F05E23',
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 30,
    marginBottom: -40,
  },
  headerTitle: { color: '#ffffff', fontFamily: 'Montserrat-Bold' },
  headerSubtle: { color: '#ffffff', fontFamily: 'Montserrat-Regular' },
  introductionContainer: {
    paddingHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  introductionLabel: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#FFE8C5',
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonPrimary: {
    backgroundColor: '#F05E23',
    marginVertical: 5,
    borderRadius: 5,
  },
  container: {
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  label: { fontSize: 13, fontFamily: 'Montserrat-Regular' },
  textField: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E4E4E4',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  errorLabel: { fontSize: 12, fontFamily: 'Montserrat-Regular' },
  registerLabel: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  registerButton: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#F05E23',
  },
});
