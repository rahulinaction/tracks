import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from  './Spacer';
import { withNavigation } from 'react-navigation';

interface Props{
    navigation: any,
    text: string,
    routeName: string
}
const NavLink = ({navigation, text, routeName}: Props) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={()=>{ navigation.navigate(routeName) }}>
            <Text>{text}</Text>
            </TouchableOpacity> 
        </Spacer>  
    );  
};

const styles = StyleSheet.create({

});

export default withNavigation(NavLink);