import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, WebView,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={
                                __DEV__
                                    ? require('../assets/images/red-flag.jpg')
                                    : require('../assets/images/red-flag.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>

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
        marginTop: 10,
        marginBottom: 20,
    },
});
