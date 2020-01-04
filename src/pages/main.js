import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../services/api';

function Item({ title }) {
    return (
        <View>
            <Text>
                {title}
            </Text>
        </View>
    );
}

export default class Main extends Component{

    static navigationOptions = {
        title: "Turmas",
    };

    state = {
        class_counter: 0,
        classes: [],
    };

    componentDidMount(){
        this.loadClasses();
    }

    loadClasses = async () => {
        const response = await api.get('ebd-class/');
        const data = response.data;
        this.setState({ class_counter: data.length});
        this.setState({classes: data})
    };

    render(){
        return (
            <View>
                <Text>
                  {""}
                </Text>
                <Text>
                    Quantidade de Turmas Cadastradas: {this.state.class_counter}
                </Text>
                <Text>
                  {""}
                </Text>
                <Text>
                  Turmas Cadastradas:
                </Text>
                <FlatList
                    data={this.state.classes}
                    renderItem={({ item }) => <Item title={item.class_name} />}
                    keyExtractor={(item, index) => item.key }
                />
            </View>
        );
    }
}
