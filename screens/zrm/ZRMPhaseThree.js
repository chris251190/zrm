import React from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput, TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseThree extends React.Component {
    state = {
        associations: [],
        inputValue: '',
    };

    render() {
        return (
            <View>
                <Text style={styles.homeTitle}>Write down positive resources you see in the image</Text>
                <Image source={this.props.chosenImage} style={styles.image}/>
                <Text>Insert your ideas here:</Text>
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
        return <View>
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
        return <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}
        />;
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



