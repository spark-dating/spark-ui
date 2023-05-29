// styles.tsx

import { StyleSheet } from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topView: {
    justifyContent: "center",
    width: "90%",
    paddingTop: 140,
  },
  bottomView: {
    width: "100%",
    alignItems: "center",
    marginBottom: 70,
  },
  arrow: {
    position: "absolute",
    top: 90,
    left: 40,
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
  header: {
    color: 'black',
    fontSize: 64,
    fontFamily: 'OpenSans_400Regular',
    marginTop: 18,
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'OpenSans_400Regular',
  },
});


