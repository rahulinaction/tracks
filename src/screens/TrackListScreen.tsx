import React,{Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
  } from 'react-native';
  import {SafeAreaView} from 'react-navigation';

  import { NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  
  interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }


export default class TrackListScreen extends Component<Props> {
    public static navigationOptions = {
        title: 'Track List Screen',
    };

    render() {
      const { navigation } = this.props;  
      return (
        <SafeAreaView forceInset={{"top": "always"}}>
            <Text> Track ListScreen</Text>
            <Button title="Go to Main Flow" onPress={()=>{ navigation.navigate('TrackDetail'); }} />

        </SafeAreaView>
      );
    }
   
  };