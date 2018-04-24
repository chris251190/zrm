import React from 'react';
import {Image, StyleSheet, Text, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseFive extends React.Component {
    render() {
        return (
            <View>
                <Image source={this.props.chosenImage} style={styles.image}/>
                <Text style={{fontSize: 20}}>Your new motto:{"\n"}</Text>
                <Text style={{fontSize: 20}}>'{this.props.motto}'{"\n"}</Text>
                <Text>Further steps you can do to strengthen your new motto: {"\n"}</Text>
                <Text>1. Create an embodiment that fits your motto {"\n"}</Text>
                <Text>2. Find symbols that remind you of your new motto so your unconscious will perceive them.</Text>
                <Text>It can be things like a new screensaver</Text>
                <Text>, a password that reminds you of your new motto or a new key chain. </Text>
                <Text>It could be everything! Be creative and have fun!</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginTop: 3,
        marginBottom: 20,
        marginLeft: -10,
    },
});
