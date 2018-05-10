import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ZRMPhaseTwo from './zrm/ZRMPhaseTwo';
import ZRMPhaseThree from './zrm/ZRMPhaseThree';
import ZRMPhaseFour from './zrm/ZRMPhaseFour';
import ZRMPhaseFive from './zrm/ZRMPhaseFive';
import ZRMPhaseOne from './zrm/ZRMPhaseOne';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {Image} from "react-native-expo-image-cache";

export default class ZRMScreen extends React.Component {
    static navigationOptions = {
        header: <View style={{alignItems: 'center', backgroundColor: '#f2f2f2'}}>
            <Image
                uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/icon.png?alt=media&token=47e4c825-522e-4efa-baec-4b85c4827ed5"
                style={{
                    height: 50,
                    width: 80,
                    marginTop: 20,
                }}/>
        </View>,
    };

    constructor(props) {
        super(props);
        this.state = {
            phase: 0,
            currentImage: null,
            motto: null,
            associations: null,
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
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <GestureRecognizer
                        onSwipe={(direction, state) => this.onSwipe(direction, state)}
                        config={config}
                        style={{flex: 1}}>

                        {this.renderProgress()}

                        <View style={styles.getStartedContainer}>
                            <View style={{width: 30}}>
                                {this._renderBeforeArrow()}
                            </View>

                            <View style={{width: 300}}>{this._renderContent()}</View>

                            <View style={{width: 30}}>
                                {this._renderNextArrow()}
                            </View>
                        </View>
                    </GestureRecognizer>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    renderProgress() {
        return <View style={{
            height: 30,
            alignItems: 'center',
            justifyContent: 'center'
        }}><Text>{this.state.phase + 1}/5</Text></View>;
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
        return this.isNotOnLastScreen() || this.imageIsSet() || this.isMottoSetOnScreenFour();
    }

    isMottoSetOnScreenFour() {
        return this.state.motto !== null && this.state.phase === 3;
    }

    isNotOnLastScreen() {
        return this.state.phase < 4 && this.state.phase !== 1 && this.state.phase !== 3;
    }

    imageIsSet() {
        return this.state.phase === 1 && this.state.currentImage !== null;
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
        let content;

        if (phase === 0) {
            content = <ZRMPhaseOne/>;
        } else if (phase === 1) {
            content = <ZRMPhaseTwo handler={this.currentImageHandler}/>;
        } else if (phase === 2) {
            content = <ZRMPhaseThree handler={this.associationsHandler} chosenImage={this.state.currentImage}/>;
        } else if (phase === 3) {
            content = <ZRMPhaseFour handler={this.mottoHandler} chosenImage={this.state.currentImage}
                                    associations={this.state.associations}/>;
        } else if (phase === 4) {
            content = <ZRMPhaseFive chosenImage={this.state.currentImage} motto={this.state.motto}/>;
        }
        return (
            <View>
                {content}
            </View>
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
    contentContainer: {
        backgroundColor: '#fff',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    getStartedContainer: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});
