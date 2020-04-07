import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';


interface Props {
    headerText: string,
    errorMessage: string,
    onSubmit: any,
    submitButtonText: string
}

const AuthForm  =  ({headerText, errorMessage, onSubmit, submitButtonText}: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <Text>{headerText}</Text>
            <Input label="email"  autoCapitalize="none" autoCorrect={false}  value={email} onChangeText={newEmail=> setEmail(newEmail)}/>
            <Input label="password"  value={password} onChangeText={newPassword=> setPassword(newPassword)} />
            <Spacer>
               <Button title={submitButtonText} onPress={()=> onSubmit({email, password}) } />
            </Spacer>  
            
           { errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text>: null}
        </View>
      )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginRight: 15
    }    
});

export default AuthForm;
