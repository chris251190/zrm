import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ZRMPhaseTwo from './ZRMPhaseTwo';
import ZRMPhaseThree from './ZRMPhaseThree';
import ZRMPhaseFour from './ZRMPhaseFour';
import ZRMPhaseFive from './ZRMPhaseFive';
import ZRMPhaseSix from './ZRMPhaseSix';
import ZRMPhaseOne from './ZRMPhaseOne';

export default class ZRMScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phase: 0};
    }

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
                                    ? require('../../assets/images/red-flag.jpg')
                                    : require('../../assets/images/red-flag.jpg')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>
                        {this._displayContent()}

                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-start'}}>
                            {this._renderBeforeArrow()}
                            {this._renderNextArrow()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _renderNextArrow() {
        return this.state.phase < 5 ? <TouchableOpacity onPress={this._handleNext}>
            <Ionicons
                name={Platform.OS === 'ios' ? "ios-arrow-forward" : "md-arrow-forward"}
                size={50}
                style={{marginRight: 10, width: 50}}/>
        </TouchableOpacity> : null;
    }

    _renderBeforeArrow() {
        return this.state.phase > 0 ? <TouchableOpacity onPress={this._handleBefore}>
            <Ionicons
                name={Platform.OS === 'ios' ? "ios-arrow-back" : "md-arrow-back"}
                size={50}
                style={{marginRight: 10, width: 50}}/>
        </TouchableOpacity> : null;
    }

    _displayContent() {
        let phase = this.state.phase;
        let content;

        if (phase === 0) {
            content = <ZRMPhaseOne/>;
        } else if (phase === 1) {
            content = <ZRMPhaseTwo/>;
        } else if (phase === 2) {
            content = <ZRMPhaseThree/>;
        } else if (phase === 3) {
            content = <ZRMPhaseFour/>;
        } else if (phase === 4) {
            content = <ZRMPhaseFive/>;
        } else if (phase === 5) {
            content = <ZRMPhaseSix/>;
        }
        return (
            <View>{content}</View>
        );
    };

    _handleNext = () => {
        this.setState(previousState => {
            return {phase: previousState.phase + 1};
        });
    };

    _handleBefore = () => {
        this.setState(previousState => {
            return {phase: previousState.phase - 1};
        });
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