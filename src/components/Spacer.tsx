import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
    children: any
}

export default class Spacer extends Component<Props> {
    render(){
        const {children} = this.props;
        return(
            <View style={styles.spacer}>{children}</View>
        )
    }
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});
