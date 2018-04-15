import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
                                    ? require('../assets/images/robot-dev.png')
                                    : require('../assets/images/robot-prod.png')
                            }
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>
                        <Text style={styles.getStartedText}>{this._displayContent()}</Text>

                        {this._renderBeforeArrow()}

                        {this._renderNextArrow()}
                    </View>
                </ScrollView>
            </View>
        );
    }

    _renderNextArrow() {
        return this.state.phase < 6 ? <TouchableOpacity onPress={this._handleNext}>
            <Ionicons
                name={"ios-arrow-forward"}
                size={50}
                style={{marginRight: 10, width: 50}}/>
        </TouchableOpacity> : null;
    }

    _renderBeforeArrow() {
        return this.state.phase > 0 ? <TouchableOpacity onPress={this._handleBefore}>
            <Ionicons
                name={"ios-arrow-back"}
                size={50}
                style={{marginRight: 10, width: 50}}/>
        </TouchableOpacity> : null;
    }

    _displayContent() {
        let pageZero = "ZRM Page 0";
        let pageOne = "ZRM Page 1";
        let pageTwo = "ZRM Page 2";
        let pageThree = "ZRM Page 3";
        let pageFour = "ZRM Page 4";
        let pageFive = "ZRM Page 5";
        let pageSix = "ZRM Page 6";

        let phase = this.state.phase;

        let content;

        if (phase === 0) {
            content = pageZero;
        } else if (phase === 1) {
            content = pageOne;
        } else if (phase === 2) {
            content = pageTwo;
        } else if (phase === 3) {
            content = pageThree;
        } else if (phase === 4) {
            content = pageFour;
        } else if (phase === 5) {
            content = pageFive;
        } else if (phase === 6) {
            content = pageSix;
        }

        return (
            <Text>
                {content}
            </Text>
        );
    };

    _handleNext = () => {
        this.setState(previousState => {
            return {phase: previousState.phase + 1};
        });
    }

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
