import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highThumbContainer: {
    position: 'absolute',
  },
  railsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelFixedContainer: {
    alignItems: 'flex-start',
  },
  labelFloatingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'flex-start',
  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: "space-between",
    flexDirection: 'row',
    height: 20
  },
  topLabel: {
    width: '100%',
    justifyContent: "space-between",
    flexDirection: 'row',
    height: 20,
  }
});
