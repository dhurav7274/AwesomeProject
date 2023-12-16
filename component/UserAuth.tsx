import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';

function UserAuth(): React.JSX.Element {
  return (
    <View style={style.container}>
      <Image source={require('../assets/app_icon.png')} />

      <TextInput
        placeholder="Please Enter Your Username"
        style={style.textInput}
      />

      <TextInput
        placeholder="Please Enter Your Password"
        style={style.textInput}
      />

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    minWidth: '100%',
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: '#BBDEFB',
    height: 45,
    marginBottom: 20,
  }

});

export default UserAuth;
