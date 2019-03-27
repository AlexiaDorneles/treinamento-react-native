import { Dimensions, StyleSheet } from 'react-native'
const size = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    width: size,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingVertical: 10,
    paddingRight: 10,
  },
  scrollContainer: {
    width: size,
  },
  contentContainerStyle: {
    paddingRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingBottom: 15,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
})
