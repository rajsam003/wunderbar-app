import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  button:{
    margin: 0,
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  secondaryButton:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 2,
  }
});

export default Styles;