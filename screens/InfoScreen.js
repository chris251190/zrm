import React from 'react';
import {Platform, ScrollView, StyleSheet, View, WebView,} from 'react-native';
import {Image} from "react-native-expo-image-cache";

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: <View style={{alignItems: 'center', backgroundColor:'#f2f2f2'}}>
            <Image uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/icon.png?alt=media&token=64bda094-4522-4377-b9ca-ef16f69b7d3d" style={{
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
                    <View style={{height: 300}}>
                        <WebView
                            style={styles.WebViewContainer}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{uri: 'https://www.youtube.com/embed/Ab3bw1mGXUM'}}
                        />
                    </View>

                    <View style={{height: 300}}>
                        <WebView
                            style={styles.WebViewContainer}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{uri: 'https://www.youtube.com/embed/ideJm4BsskA'}}
                        />
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
    WebViewContainer: {
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
});
