import React from 'react';
import {FlatList, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseFour extends React.Component {
    state = {
        motto: null,
    };

    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = this.props.chosenImage;
        return (
            <View>
                <Image {...{preview, uri}} style={styles.image}/>

                <Text style={styles.text}>your favorite ideas:</Text>
                <FlatList
                    data={this.props.associations}
                    renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
                />

                <Text style={styles.text}>
                    {"\n"}
                    Please write down a sentence that represents your new motto. You can use the example sentences
                    or create your own personal sentence. {"\n"}{"\n"} </Text>

                <View style={{flexDirection: 'row', marginBottom: 10, marginTop: -10}}>
                    <TextInput
                        style={{backgroundColor: '#ededed', height: 25, flex: 0.9, marginRight: 10}}
                        onChangeText={(motto) => {
                            this.setState({motto});
                            this.props.handler(motto);
                        }}
                        value={this.state.motto}/>
                    {this.state.motto !== null && this.state.motto !== '' && this.renderClearButton()}
                </View>

                <Text style={styles.text}>
                    Beginnings could be:{"\n"}
                    I want to feel like ...{"\n"}
                    I want to act like ...{"\n"}
                    I want to be like ... {"\n"}{"\n"}

                    * Example for a new motto{"\n"}
                    I want to feel like a bear that has thick fur.{"\n"}
                    I want to act like a young woman on the Vespa, cool and with fullspeed.{"\n"}
                    I want to be like the lotus and grow at my own pace.{"\n"}
                    I want to go step for step at my own pace. {"\n"}
                </Text>
            </View>
        );
    }

    renderClearButton() {
        return <TouchableHighlight onPress={() => {
            this.setState({motto: ''});
            this.props.handler('');
        }}>
            <Ionicons name={Platform.OS === 'ios' ? "ios-close" : "md-close"} size={30}/>
        </TouchableHighlight>;
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 10,
    },
    image: {
        width: 300,
        height: 200,
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
});
