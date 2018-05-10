import React from 'react';
import {ScrollView, StyleSheet, View, WebView,} from 'react-native';
import {Image} from "react-native-expo-image-cache";

export default class InfoScreen extends React.Component {
    static navigationOptions = {
        header: <View style={{alignItems: 'center', backgroundColor:'#f2f2f2'}}>
            <Image uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/icon.png?alt=media&token=47e4c825-522e-4efa-baec-4b85c4827ed5" style={{
                height: 50,
                width: 80,
                marginTop: 20
            }}/>
        </View>,
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
