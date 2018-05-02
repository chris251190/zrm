import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class WishPhaseThree extends React.Component {
    state = {
        associations: [],
        inputValue: '',
    };

    render() {
        return (
            <View>
                <Text style={styles.homeTitle}>Write down positive resources that you associate with your wish
                    elements</Text>
                <View style={{flex: 1,
                    flexDirection: 'row',
                    width: 300,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'}}>
                    {this.props.associations.map(a => <Text key={a.key.toString()}>{a.key},</Text>)}
                </View>
                <Text>{"\n"}{"\n"}Insert your ideas here:</Text>
                <TextInput
                    value={this.state.inputValue}
                    style={{backgroundColor: '#ededed', height: 30, marginBottom: 20}}
                    onChangeText={(inputValue) => this.setState({inputValue: inputValue})}
                    onSubmitEditing={() => {
                        this.setState({associations: [...this.state.associations, {key: this.state.inputValue}]});
                        this.props.handler([...this.state.associations, {key: this.state.inputValue}]);
                        this.setState({inputValue: ''});
                    }}/>

                <View style={styles.container}>
                    <Text>your ideas:</Text>
                    <FlatList
                        data={this.state.associations}
                        renderItem={({item}) => this.renderListItem(item)}
                    />
                </View>
            </View>
        );
    }

    renderListItem(item) {
        return <View key={item.key.toString()}>
            <Text style={styles.item}>
                - {item.key}
            </Text>
            <TouchableHighlight style={{alignSelf: 'flex-end'}}
                                onPress={() => {
                                    this.handlePress(item);
                                }}>
                <Ionicons name={Platform.OS === 'ios' ? "ios-trash" : "md-trash"} size={20}/>
            </TouchableHighlight>
            {this.lineSeparator()}
        </View>;
    }

    handlePress(item) {
        let array = this.state.wishElements;
        let index = array.indexOf(item);
        array.splice(index, 1);

        if (array.length === 0) {
            this.setState({wishElements: []});
            this.props.handler(this.state.wishElements);
        } else {
            this.setState({wishElements: array});
            this.props.handler(this.state.wishElements);
        }
    }

    lineSeparator() {
        return <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>;
    }
};

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginTop: 3,
        marginBottom: 20,
        marginLeft: -10,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        marginTop: 15,
    },
});



