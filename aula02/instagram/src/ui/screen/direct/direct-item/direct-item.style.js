import { Dimensions, StyleSheet } from 'react-native'
const width = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  camera: {
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 20,
  },
  groupPic: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  groupPicBackground: {
    position: 'absolute',
    top: 8,
    left: 8,
    borderRadius: 50,
    backgroundColor: 'white',
    width: 70,
    height: 70,
    margin: 10,
  },
})
