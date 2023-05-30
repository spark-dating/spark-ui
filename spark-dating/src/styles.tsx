import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  containerIntro: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topView: {
    justifyContent: "center",
    width: "80%",
    paddingTop: height * 0.13, // Adjust the value as needed
  },
  bottomView: {
    width: "100%",
    alignItems: "center",
    marginBottom: height * 0.05, // Adjust the value as needed
  },
});

export const textStyles = StyleSheet.create({
  subHeader: {
    color: '#797C7B',
    fontSize: 18, 
    lineHeight: 26,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  },
  headerSmall: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'OpenSans_400Regular',
  },
  header: {
    color: 'black',
    fontSize: 64, 
    fontFamily: 'OpenSans_400Regular',
  },
  text: {
    // color: 'black',
    fontSize: 14, 
    fontFamily: 'OpenSans_400Regular',
  },
  boldText: {
    // color: 'black',
    fontSize: 14, 
    fontFamily: 'OpenSans_700Bold',
  },
});

export const commonStyles = StyleSheet.create({
  icon : {
    width: 50,
    height: 50,
    zIndex: 1,
    alignSelf: 'center',
    marginTop: -20,
    marginBottom: 20,
  },
  arrow: {
    position: "absolute",
    // top: height * 0.1, // Adjust the value as needed
    // left: width * 0.1, // Adjust the value as needed
    top: 60,
    left: 40,
    zIndex: 1,
  },
})

