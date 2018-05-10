import React from 'react';
import {FlatList, StyleSheet, Text, TextInput, View,} from 'react-native';
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
            <View style={{height: 500}}>
                <Image {...{preview, uri}} style={styles.image}/>

                <View>
                    <Text style={styles.text}>your favorite ideas:</Text>
                    <FlatList
                        data={this.props.associations}
                        renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
                    />

                    <Text style={styles.text}>
                        {"\n"}
                        Please write down a sentence that represents your new motto. You can use the example sentences
                        or create your own personal sentence. {"\n"}{"\n"} </Text>

                    <TextInput
                        style={{backgroundColor: '#ededed', height: 20}}
                        onChangeText={(motto) => {
                            this.setState({motto});
                            this.props.handler(motto);
                        }}
                        value={this.state.motto}/>

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
            </View>
        );
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
        marginLeft: -10,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
});
