import { StyleSheet } from 'react-native'

const text = { color: '#F9F9F9' }
const row = {
  flexDirection: 'row',
  margin: 20,
  alignItems: 'center',
}

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 5,
    flex: 1,
  },
  logo: {
    ...text,
    fontSize: 150,
  },
  text: {
    ...text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 45,
  },
  input: {
    marginBottom: 25,
  },
  small: {
    fontSize: 12,
    fontWeight: 'normal',
    marginRight: 5,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
  row,
  or: {
    fontWeight: 'normal',
    fontSize: 14,
    marginBottom: 0,
  },
  lineContainer: {
    ...row,
    width: '90%',
    marginTop: 0,
    justifyContent: 'space-between',
  },
  facebook: {
    ...text,
    marginRight: 5,
  },
  noAccount: {
    ...row,
    marginTop: 'auto',
  },
})
