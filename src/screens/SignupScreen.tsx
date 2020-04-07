import React,{Component, useState, useContext} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
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
  import NavLink from '../components/NavLink';
  import AuthForm from '../components/AuthForm';
  import {Context as AuthContext} from '../context/AuthContext';

  interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }

  
//

  const SignupScreen = ({navigation}: Props) => {
    const {state, signup} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            < AuthForm headerText="Sign up for tracker" 
              errorMessage = {state["errorMessage"]}
              submitButtonText = "Sign up"
              onSubmit={({email, password})=> signup({email,password})}
            />
            <NavLink 
              text="Already have an account"
              routeName="Signin"
            />
        </View>
      )
  }



export default SignupScreen;