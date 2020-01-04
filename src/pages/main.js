import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component{

    static navigationOptions = {
        title: "Main Page",
    };

    componentDidMount(){
        this.loadClasses();
    }

    loadClasses = async () => {
        const response = await api.get('ebd-class/');
        const data = response.data;
        console.log(data); 
    };

    render(){
        return (
            <View>
                <Text>Página Inicial</Text>
            </View>
        );
    }
}