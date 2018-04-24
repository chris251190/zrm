import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class WishPhaseOne extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    <Text style={{fontSize: 20}}>Welcome!</Text> {"\n"}{"\n"}

                    The online tool will guide you step-by-step through the process of formulating a “motto goal” that
                    can be used in accordance with the ZRM method of self-management. {"\n"}{"\n"}

                    Now you will view a different categories, that your wishelement could be.{"\n"}{"\n"}

                    Tune out the rational part of your brain for the moment and let your intuition take over for
                    this task. Answer yourself the question: "What element (animal, person, landscape, etc.) has the
                    abilities
                    that I need to feel and act like I want to?" There are only two rules for fitting wish elements,
                    they have to make you feel good and create inner images/associations. This ensures that your wish
                    element
                    was chosen by your subconsciousness and not by your logical thinking.{"\n"}{"\n"}

                    You don’t have to understand why the wish element gives you such a good feeling. We will come to
                    that in the next step.{"\n"}{"\n"}
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
