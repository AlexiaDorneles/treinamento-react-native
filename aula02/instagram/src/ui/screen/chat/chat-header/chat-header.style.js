import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  name: {
    flex: 4,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    elevation: 1,
  },
  icon: {
    fontSize: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
})
