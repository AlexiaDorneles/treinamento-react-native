import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: width - 40,
    marginVertical: 10,
  },
})
