import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text, TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ZRMPhaseTwo from './zrm/ZRMPhaseTwo';
import ZRMPhaseThree from './zrm/ZRMPhaseThree';
import ZRMPhaseFour from './zrm/ZRMPhaseFour';
import ZRMPhaseFive from './zrm/ZRMPhaseFive';
import ZRMPhaseOne from './zrm/ZRMPhaseOne';
import {swipeDirections} from 'react-native-swipe-gestures';
import GestureRecognizer from 'react-native-swipe-gestures';
import WishPhaseOne from './wishelements/WishPhaseOne';
import WishPhaseTwo from './wishelements/WishPhaseTwo';
import WishPhaseThree from './wishelements/WishPhaseThree';
import WishPhaseFour from './wishelements/WishPhaseFour';
import WishPhaseFive from './wishelements/WishPhaseFive';

export default class ZRMScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: 0,
            currentImage: null,
            motto: null,
            associations: null,
            renderWishElements: false,
        };
        this.currentImageHandler = this.currentImageHandler.bind(this);
        this.mottoHandler = this.mottoHandler.bind(this);
        this.associationsHandler = this.associationsHandler.bind(this);
    }

    currentImageHandler(chosenImage) {
        this.setState({
            currentImage: chosenImage,
            phase: this.state.phase += 1,
        });
    }

    mottoHandler(motto) {
        this.setState({
            motto: motto,
        });
    }

    associationsHandler(associations) {
        this.setState({
            associations: associations,
        });
    }

    onSwipe(gestureName) {
        const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_LEFT:
                if (this.shouldRenderNextArrow()) {
                    this.setState(previousState => {
                        return {phase: previousState.phase + 1};
                    });
                }
                break;
            case SWIPE_RIGHT:
                if (this.shouldRenderBeforeArrow()) {
                    this.setState(previousState => {
                        return {phase: previousState.phase - 1};
                    });
                }
                break;
        }
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        return (
            <GestureRecognizer
                onSwipe={(direction, state) => this.onSwipe(direction, state)}
                config={config}
                style={{
                    flex: 1,
                    backgroundColor: this.state.backgroundColor
                }}
            >
                <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={100} behavior="padding">
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.welcomeContainer}>
                            {this.renderHeaderImage()}
                        </View>

                        <View style={styles.getStartedContainer}>
                            <View style={{width: 30}}>
                                {this._renderBeforeArrow()}
                            </View>

                            <View style={{width: 300}}>{this._renderContent()}</View>

                            <View style={{width: 30}}>
                                {this._renderNextArrow()}
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </GestureRecognizer>
        );
    }

    renderHeaderImage() {
        return <Image
            source={
                __DEV__
                    ? require('../../assets/images/red-flag.jpg')
                    : require('../../assets/images/red-flag.jpg')
            }
            style={styles.welcomeImage}
        />;
    }

    _renderNextArrow() {
        return this.shouldRenderNextArrow() ?
            <TouchableOpacity onPress={this._handleNext}>
                <Ionicons
                    name={Platform.OS === 'ios' ? "ios-arrow-forward" : "md-arrow-forward"}
                    size={30}
                    style={{marginLeft: 30, width: 20}}/>
            </TouchableOpacity> : null;
    }

    shouldRenderNextArrow() {
        return this.state.phase !== 0 && this.state.phase < 5 && this.state.phase !== 2 || (this.state.phase === 2 && this.state.currentImage !== null || this.state.renderWishElements === true);
    }

    _renderBeforeArrow() {
        return this.shouldRenderBeforeArrow() ? <TouchableOpacity onPress={this._handleBefore}>
            <Ionicons
                name={Platform.OS === 'ios' ? "ios-arrow-back" : "md-arrow-back"}
                size={30}
                style={{marginRight: 10, width: 20}}/>
        </TouchableOpacity> : null;
    }

    shouldRenderBeforeArrow() {
        return this.state.phase > 0;
    }

    _renderContent() {
        let phase = this.state.phase;
        let renderWish = this.state.renderWishElements;
        let content;

        if (phase === 1) {
            content = <ZRMPhaseOne/>;

            if (renderWish) {
                content = <WishPhaseOne/>;
            }
        } else if (phase === 2) {
            content = <ZRMPhaseTwo handler={this.currentImageHandler}/>;

            if (renderWish) {
                content = <WishPhaseTwo handler={this.associationsHandler}/>;
            }
        } else if (phase === 3) {
            content = <ZRMPhaseThree handler={this.associationsHandler} chosenImage={this.state.currentImage}/>;

            if (renderWish) {
                content = <WishPhaseThree handler={this.associationsHandler} chosenImage={image} associations={this.state.associations}/>;
            }
        } else if (phase === 4) {
            content = <ZRMPhaseFour handler={this.mottoHandler} chosenImage={this.state.currentImage}
                                    associations={this.state.associations}/>;

            if (renderWish) {
                content = <WishPhaseFour handler={this.mottoHandler} chosenImage={image}
                                         associations={this.state.associations}/>;
            }
        } else if (phase === 5) {
            content = <ZRMPhaseFive chosenImage={this.state.currentImage} motto={this.state.motto}/>;
            if (renderWish) {
                content = <WishPhaseFive chosenImage={image} motto={this.state.motto}/>;
            }
        }
        return (
            <View>
                {this._renderStart()}
                {content}
            </View>
        );
    };

    _renderStart() {
        let content = null;

        if (this.state.phase === 0) {
            content = <View>
                <TouchableHighlight onPress={() => {
                    this.setState({renderWishElements: false});
                    this._handleNext();
                }}>
                    <Text>ZRM</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.setState({renderWishElements: true});
                    this._handleNext();
                }}>
                    <Text>Wishelements</Text>
                </TouchableHighlight>
            </View>;
        }
        return content;
    }

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

const image = require('../../assets/images/autopista.jpg');

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
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
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
