import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../store/slice/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(
      login({
        token: 'test-key',
      }),
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
