import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component{

    static navigationOptions = {
        title: "Main Page",
    };

    render(){
        return (
            <View>
                <Text>Página Inicial</Text>
            </View>
        );
    }
}