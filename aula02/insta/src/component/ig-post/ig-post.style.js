import { Dimensions, StyleSheet } from 'react-native'
const size = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  image: {
    width: size,
    height: size,
  },
  info: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  liked: {
    marginLeft: 10,
  },
  likedIcon: {
    fontSize: 16,
  },
})
