import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {MonoText} from '../components/StyledText';
import {Image} from "react-native-expo-image-cache";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: <View style={{alignItems: 'center', backgroundColor:'#f2f2f2'}}>
            <Image uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/red-flag.jpg?alt=media&token=bbcf6dfa-24cb-4118-8829-60274378e6a8" style={{width: 70,
                height: 50,
                width: 50,
                marginTop: 30,
                marginBottom: 10}}/>
        </View>,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


                    <View style={styles.getStartedContainer}>

                        <View><Text style={styles.homeTitle}>Welcome to the ZRM App!</Text></View>

                        <Text style={styles.introduction}>This is an app to guide you through the process of ZRM
                            (Zürcher Ressourcenmodell). It is
                            a process which uses images and symbols to increase self management abilities.</Text>

                        <Text style={styles.getStartedText}>When you want to dive in directly click on</Text>
                        <MonoText style={styles.codeHighlightText}>'ZRM'</MonoText>

                        <Text style={styles.getStartedText}>When you want to have more Background Information of what
                            ZRM is and how and why
                            it works, click on</Text>

                        <MonoText style={styles.codeHighlightText}>'Info'</MonoText>

                        <Text style={styles.getStartedText}>If you want to know more about the developer, then click
                            on </Text>
                        <MonoText style={styles.codeHighlightText}>'Contact'</MonoText>
                    </View>
                </ScrollView>
            </View>
        );
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
        marginBottom: 10,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
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
        marginBottom: 20,
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    introduction: {
        fontSize: 15,
        color: 'rgba(90,100,109, 1)',
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    getStartedText: {
        fontSize: 16,
        color: 'rgba(90,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
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
