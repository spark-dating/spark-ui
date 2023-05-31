import { StyleSheet, Dimensions } from 'react-native';
import { PRIMARY_COLOR } from './constants';
import { horizontalScale, verticalScale, moderateScale } from './metrics';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


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
    justifyContent: 'center',
    width: '90%',
    paddingTop: height * 0.10, // For example
  },
  bottomView: {
    width: '100%',
    alignItems: 'center',
    marginBottom: height * 0.05, // For example
  },
});

export const textStyles = StyleSheet.create({
  subHeader: {
    color: '#797C7B',
    fontSize: hp('2.2%'), 
    lineHeight: hp('3.2%'),
    fontFamily: 'OpenSans_400Regular',
    marginTop: hp('1%'),
  },
  headerSmall: {
    color: 'black',
    fontSize: hp('5%'),
    fontFamily: 'OpenSans_400Regular',
  },
  header: {
    color: 'black',
    fontSize: hp('8%'), 
    fontFamily: 'OpenSans_400Regular',
  },
  header2: {
    color: 'black',
    fontSize: hp('8%'),
    fontFamily: 'OpenSans_700Bold',
  },
  formHeader: {
    color: 'black',
    fontSize: hp('5%'), 
    fontFamily: 'OpenSans_700Bold',
  },
  headerWhite : {
    color: 'white',
    fontSize: hp('6%'),
    fontFamily: 'OpenSans_400Regular',
  },
  text: {
    // color: 'black',
    fontSize: hp('1.7%'), 
    fontFamily: 'OpenSans_400Regular',
  },
  boldText: {
    // color: 'black',
    fontSize: hp('1.7%'), 
    fontFamily: 'OpenSans_700Bold',
  },
  boldOnboarding: {
    fontFamily: 'OpenSans_700Bold',
  },
});

export const commonStyles = StyleSheet.create({
  icon : {
    width: hp('6%'),
    height: hp('6%'),
    zIndex: 1,
    alignSelf: 'center',
    marginTop: hp('-2.5%'),
    marginBottom: hp('2.5%'),
  },
  arrow: {
    position: "absolute",
    top: hp('8%'),
    left: wp('10%'),
    zIndex: 1,
  },
});
export const formStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: hp('1.8%'),
    color: PRIMARY_COLOR,
    marginBottom: hp('1%'),
  },
  input: {
    height: hp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: 'grey', // thin grey line
    marginBottom: hp('2%'),
  },
});

export const buttonStyles = StyleSheet.create({
    button: {
      width: 295,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    },
    text: {
      fontSize: 16,
      fontFamily: 'OpenSans_700Bold',
    },
  });
