import React from 'react';
import {FlatList, Image, Modal, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class WishPhaseTwo extends React.Component {
    state = {
        associations: [],
        inputValue: '',
    };

    render() {
        return (
            <View>
                <View><Text style={styles.header}>Answer for each category following question: "What animal, landscape,
                    etc. has the abilities that would help me feel and act like I want?"</Text></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 300,
                    height: 500,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    <FlatList
                        data={wishElementData}
                        renderItem={({item}) => this.renderCategory(item)}
                        numColumns={1}
                    />
                </View>
            </View>
        );
    }

    renderCategory(item) {
        return <View key={item.key.toString()} style={{height: 100}}>
            <Text>{item.category}</Text>
            <TextInput
                value={this.state.inputValue}
                style={{backgroundColor: '#ededed', height: 30, marginBottom: 20}}
                onChangeText={(inputValue) => this.setState({inputValue: inputValue})}
                onSubmitEditing={() => {
                    this.setState({associations: [...this.state.associations, {key: this.state.inputValue}]});
                    this.props.handler([...this.state.associations, {key: this.state.inputValue}]);
                    this.setState({inputValue: ''});
                    console.log(this.state.associations);
                }}/>
        </View>;
    }
};

const wishElementData = [
    {key: 1, category: 'Animal'},
    {key: 2, category: 'Person'},
    {key: 3, category: 'Fantasy'},
    {key: 4, category: 'Vehicle'},
    {key: 5, category: 'Plant'},
    {key: 6, category: 'Landscape'},
    {key: 7, category: 'Other Wishelement'},
];

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 60,
        marginBottom: 10,
        marginRight: 10,
        resizeMode: 'contain',
    },
    modalImage: {
        width: 400,
        height: 500,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    }
});



