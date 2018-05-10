import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";
import {WebBrowser} from "expo";

export default class ContactScreen extends React.Component {
    static navigationOptions = {
        header: <View style={{alignItems: 'center', backgroundColor:'#f2f2f2'}}>
            <Image uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/icon.png?alt=media&token=167d3333-03d4-429b-ac4e-041a1770db79" style={{
                height: 50,
                width: 50,
                marginTop: 30,
                marginBottom: 10}}/>
        </View>,
    };

    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/7ED76BF4-3CBA-4C79-B2D7-4E31E6DF6DE4.jpeg?alt=media&token=0635cbcf-31ab-405e-afa8-c4fd13768644";
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image {...{preview, uri}} style={styles.welcomeImage}/>
                    </View>

                    <View style={styles.getStartedContainer}>

                        <Text style={styles.getStartedText}>Hey!</Text>

                        <Text style={styles.getStartedText}>
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
                    </View>
                </ScrollView>
            </View>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 200,
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
