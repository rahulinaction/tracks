import React,{Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  type Props = {};

import {SafeAreaView} from 'react-navigation';
import Map from '../components/Map';
export default class TrackCreateScreen extends Component<Props> {
    render() {
      return (
        <SafeAreaView forceInset={{"top": "always"}}>
            <Text>Track CreateScreen</Text>
            <Map />
        </SafeAreaView>
      );
    }
   
  };