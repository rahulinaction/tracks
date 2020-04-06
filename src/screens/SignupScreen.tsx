import React,{Component, useState, useContext} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  
  import {Input, Button} from 'react-native-elements';
  import Spacer from '../components/Spacer';
  import {Context as AuthContext} from '../context/AuthContext';

  interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }

  
//

  const SignupScreen: React.FC<Props> = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const {errorMessage} = state;
    console.log("State is",state);

    return(
            <View>
            <Text>Signup Screen</Text>
            <Input label="email"  autoCapitalize="none" autoCorrect={false}  value={email} onChangeText={newEmail=> setEmail(newEmail)}/>
            <Input label="password"  value={password} onChangeText={newPassword=> setPassword(newPassword)} />
            <Spacer>
               <Button title="Signup" onPress={()=>{ signup({email,password}) }} />
            </Spacer>  
           { state["errorMessage"] ? <Text>{state["errorMessage"]}</Text>: null}
        </View>
      )
  }



export default SignupScreen;