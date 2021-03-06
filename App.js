import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import * as firebase from 'firebase';
import { translate } from 'react-i18next';
import { StackNavigator } from 'react-navigation';
// the previous created file
import i18n from './i18n';

const Stack = StackNavigator({
    RootNavigation: { screen: RootNavigation },
});

// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedStack = () => {
    return <Stack screenProps={{ t: i18n.getFixedT() }} />;
}
const ReloadAppOnLanguageChange = translate('common', {
    bindI18n: 'languageChanged',
    bindStore: false
})(WrappedStack);

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyC0kayIyboehjpkoGziQ0YFCHsC0t5UnXM",
            authDomain: "zrmapp-ca71d.firebaseapp.com",
            databaseURL: "https://zrmapp-ca71d.firebaseio.com",
            projectId: "zrmapp-ca71d",
            storageBucket: "zrmapp-ca71d.appspot.com",
            messagingSenderId: "851749100506"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <ReloadAppOnLanguageChange />
                </View>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
