import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMHome extends React.Component {
    render() {
        return (
            <Text>
                Welcome!
                This is the homepage of the ZRM online tool for developing a new life approach.
                The online tool will guide you step-by-step through the process of formulating a “motto goal” that can
                be used in accordance with the ZRM method of self-management.
                If this is your first time using the ZRM online tool, please read the introduction. If you are already
                familiar with the online tool, you can skip the introduction and go directly to the picture gallery.
            </Text>
        );
    }
};
