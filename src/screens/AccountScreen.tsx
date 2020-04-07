import React,{Component, useContext} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

import {SafeAreaView} from 'react-navigation'; 

import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { Button } from 'react-native-elements';

type Props = {
  navigation: any
};
const AccountScreen = ({navigation}: Props) => {
    const {signout } = useContext(AuthContext);

      return (
        <SafeAreaView forceInset={{"top": "always"}}>
            <Text>Account Screen</Text>
            <Button title="Signout" onPress={signout } />
        </SafeAreaView>
      );
   
};
export default AccountScreen;