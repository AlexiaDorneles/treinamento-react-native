import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 30,
    paddingHorizontal: 7,
    paddingRight: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    flex: 1,
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
  },
  cameraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  camera: {
    fontSize: 20,
    color: 'white',
  },
})
