import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
  } from 'react-native';


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
        <View>
            <Text> Track ListScreen</Text>
            <Button title="Go to Main Flow" onPress={()=>{ navigation.navigate('TrackDetail'); }} />

        </View>
      );
    }
   
  };