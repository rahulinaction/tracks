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

export default class TrackDetailScreen extends Component<Props> {
    render() {
      return (
        <SafeAreaView forceInset={{"top": "always"}}>
            <Text> Track DetailScreen</Text>
        </SafeAreaView>
      );
    }
   
  };