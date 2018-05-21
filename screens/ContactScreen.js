import React from 'react';
import {ScrollView, StyleSheet, Text, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";
import {WebBrowser} from "expo";
import {Header} from "./components/Header";

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        header: <Header/>,
    };

    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/7ED76BF4-3CBA-4C79-B2D7-4E31E6DF6DE4.jpeg?alt=media&token=0635cbcf-31ab-405e-afa8-c4fd13768644";
        return (
            <ScrollView style={{backgroundColor: 'white'}} contentContainerStyle={styles.contactContainer}>
                <Image {...{preview, uri}} style={styles.contactImage}/>

                <Text style={styles.contactTitle}>Hey!</Text>

                <Text style={styles.contactText}>
                    This is me, Christian. I'm a 27 years old developer. I love travelling, learning new
                    languages and
                    cultures, painting, cooking and of course programming! I made this app to learn React Native
                    in an autodidactic way.

                    If you have any questions regarding this app or just want to get in contact you can use one
                    of the icons below :)
                </Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Ionicons
                        name={"logo-instagram"}
                        size={50}
                        style={{marginRight: 10, width: 50}}
                        onPress={() => this._handleOpenWithWebBrowser("instagram")}
                    />
                    <Ionicons
                        name={"logo-github"}
                        size={50}
                        style={{marginRight: 10, width: 50}}
                        onPress={() => this._handleOpenWithWebBrowser("github")}/>
                    <Ionicons
                        name={"logo-facebook"}
                        size={50}
                        style={{marginBottom: -3, width: 50}}
                        onPress={() => this._handleOpenWithWebBrowser("facebook")}
                    />
                </View>
            </ScrollView>
        );
    }

    _handleOpenWithWebBrowser = (logo) => {
        let url = 'https://expo.io';
        if (logo === 'instagram') {
            url = 'https://www.instagram.com/clehr.90/';
        }
        if (logo === 'github') {
            url = 'https://github.com/chris251190';
        }
        if (logo === 'facebook') {
            url = 'https://www.facebook.com/christian.lehr.54';
        }
        WebBrowser.openBrowserAsync(url);
    }

}

const styles = StyleSheet.create({
    contactContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    contactImage: {
        width: 200,
        height: 200,
        marginTop: 3,
        marginLeft: -10,
    },
    contactText: {
        fontSize: 17,
        color: '#787e88',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 15,
        marginLeft: 70,
        marginRight: 70,
    },
    contactTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Verdana',
        marginBottom: 20,
        marginTop: 10,
        color: '#353535'
    }
});
