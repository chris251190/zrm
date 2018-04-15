import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseTwo extends React.Component {
    render() {
        return (
            <Text>
                ZRM Phase Two
                <View>
                    <Image
                        source={require('../../assets/images/angel.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/autopista.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/cheesecake.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/churros.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/flowers.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/guell.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/hafencity_1.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/hafencity_2.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/heartdoor.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/landscape.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/lion.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/nature.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/palmera.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/stairs.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/street.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/sunrise.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/town.jpg')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../../assets/images/windows.jpg')}
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



