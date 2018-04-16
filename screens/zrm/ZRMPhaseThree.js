import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMScreen extends React.Component {
    render() {
        return (
            <Text>ZRM Phase Three

                <View>
                    <Image
                        source={require('../../assets/images/angel.jpg')}
                        style={styles.image}
                    />
                </View>
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    }
});



