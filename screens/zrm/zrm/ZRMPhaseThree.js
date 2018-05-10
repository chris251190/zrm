import React from 'react';
import {FlatList, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseThree extends React.Component {
    state = {
        associations: [],
        inputValue: '',
    };

    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = this.props.chosenImage;
        return (
            <View>
                <Text style={styles.homeTitle}>Write down positive resources you see in the image</Text>
                <Image {...{preview, uri}} style={styles.image}/>
                <Text>Insert your ideas here:</Text>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        value={this.state.inputValue}
                        style={{backgroundColor: '#ededed', height: 30, marginBottom: 20, marginRight: 20, flex: 1}}
                        onChangeText={(inputValue) => this.setState({inputValue: inputValue})}
                        onSubmitEditing={() => {
                            this.setState({associations: [...this.state.associations, {key: this.state.inputValue}]});
                            this.props.handler([...this.state.associations, {key: this.state.inputValue}]);
                            this.setState({inputValue: ''});
                        }}/>
                    {this.isInputEmpty() && this.renderClearButton()}
                </View>
                <Text>your ideas:</Text>
                <FlatList
                    data={this.state.associations}
                    renderItem={({item}) => this.renderListItem(item)}
                />
            </View>
        );
    }

    isInputEmpty() {
        return (this.state.inputValue !== null && this.state.inputValue !== '');
    }

    renderClearButton() {
        return <TouchableHighlight onPress={() => {this.setState({inputValue: ''});}}>
            <Ionicons name={Platform.OS === 'ios' ? "ios-close" : "md-close"} size={30}/>
        </TouchableHighlight>;
    }

    renderListItem(item) {
        return <View>
            <Text style={styles.item}>
                - {item.key}
            </Text>
            <TouchableHighlight style={{alignSelf: 'flex-end'}}
                                onPress={() => {
                                    this.handlePress(item);
                                }}>
                <Ionicons name={Platform.OS === 'ios' ? "ios-trash" : "md-trash"} size={25}/>
            </TouchableHighlight>
            {this.lineSeparator()}
        </View>;
    }

    handlePress(item) {
        let array = this.state.associations;
        let index = array.indexOf(item);
        array.splice(index, 1);

        if (array.length === 0) {
            this.setState({associations: []});
            this.props.handler(this.state.associations);
        } else {
            this.setState({associations: array});
            this.props.handler(this.state.associations);
        }
    }

    lineSeparator() {
        return <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/>;
    }
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginTop: 3,
        marginBottom: 20,
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



