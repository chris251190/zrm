import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseOne extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    <Text style={{fontSize: 20}}>Welcome!</Text> {"\n"}{"\n"}

                    The online tool will guide you step-by-step through the process of formulating a “motto goal” that
                    can be used in accordance with the ZRM method of self-management. {"\n"}{"\n"}

                    Now you will view a series of different pictures. You will choose one picture that
                    will serve as your resource. {"\n"}{"\n"}

                    Tune out the rational part of your brain for the moment and let your intuition take over for
                    this task. Choose the picture that gives you a strong, positive feeling (makes you feel happy or
                    calm, makes you smile, etc.).{"\n"}{"\n"}

                    You don’t have to understand why the picture gives you such a good feeling. Just pay attention to
                    which picture gives you an especially good feeling and decide for the image that gives you the best
                    feeling.{"\n"}{"\n"}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        textAlign: 'center',
    },
});
