import React from 'react';
import {
    FlatList,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ZRMPhaseThree extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Text style={styles.homeTitle}>Write down positive resources you see in the image</Text>
                <Image source={this.props.chosenImage} style={styles.image}/>
                <TextInput style={{backgroundColor: '#ededed', height: 30, marginBottom: 20}} value={'hope'}/>

                <View style={styles.container}>
                    <Text>your ideas:</Text>
                    <FlatList
                        data={[
                            {key: '- angel'},
                            {key: '- sky'},
                            {key: '- heaven'},
                            {key: '- light'},
                            {key: '- high'},
                            {key: '- fly'},
                            {key: '- justice'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginTop: 3,
        marginBottom: 20,
        marginLeft: -10,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
});



