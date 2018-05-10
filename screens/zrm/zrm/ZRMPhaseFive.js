import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseFive extends React.Component {
    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = this.props.chosenImage;
        return (
            <View>
                <Image {...{preview, uri}} style={styles.image}/>
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
        marginTop: 3,
        marginBottom: 20,
    },
});
