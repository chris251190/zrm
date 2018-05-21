import React from 'react';
import {ScrollView, StyleSheet, View, WebView,} from 'react-native';
import {Header} from "./components/Header";

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: <Header/>,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={{height: 300}}>
                        <WebView
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            source={{uri: 'https://www.youtube.com/embed/Ab3bw1mGXUM'}}
                        />
                    </View>

                    <View style={{height: 300}}>
                        <WebView
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
    contentContainer: {
    },
    welcomeContainer: {
        alignItems: 'center',
    },
});
