import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseTwo extends React.Component {
    render() {
        return (
            <View>
                <View><Text style={styles.header}>Choose an image</Text></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: 300,
                    height: 200,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
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
            </View>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 60,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    }
});



