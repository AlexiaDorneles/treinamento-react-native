export default {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 40,
    elevation: 1,
    color: 'white',
    width: '80%',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    bottom: 0,
    position: 'absolute',
    marginLeft: 10,
  },
  background: {
    bottom: 0,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  img: {
    // width: '100%',
    // height: '100%',
    flexDirection: 'row',
    flex: 1,
  },
}
