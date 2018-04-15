import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseOne extends React.Component {
    render() {
        return (
            <Text style={styles.text}>Now you will view a series of different pictures. You will choose one picture that
                will serve as your resource. {"\n"}{"\n"}

                Tune out the rational part of your brain for the moment and let your intuition take over for
                this task. Choose the picture that gives you a strong, positive feeling (makes you feel happy or calm,
                makes you smile, etc.).{"\n"}{"\n"}

                You don’t have to understand why the picture gives you such a good feeling. You
                will see one picture at a time and the series of pictures will be presented twice. Just pay attention to
                which picture gives you an especially good feeling. {"\n"}{"\n"}

                At the end of each run-through, you will see an
                overview of all of the pictures. Then you can compare all of the pictures and check which one you like
                the best.
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    }
});
