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

export default class ZRMPhaseFour extends React.Component {
    render() {
        return (
            <View style={{height: 500}}>
                <Image source={require('../../assets/images/angel.jpg')} style={styles.image}/>

                <View>
                    <Text style={styles.text}>your favorite ideas:</Text>
                    <FlatList
                        data={[
                            {key: '- angel'},
                            {key: '- sky'},
                            {key: '- high'},
                            {key: '- fly'},
                        ]}
                        renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}
                    />

                    <Text style={styles.text}>
                        {"\n"}
                        Please write down a sentence that represents your new motto. You can use the example sentences
                        or create your own personal sentence.  {"\n"}{"\n"}

                        Beginnings could be:{"\n"}
                        I want to feel like ...{"\n"}
                        I want to act like ...{"\n"}
                        I want to be like ...  {"\n"}{"\n"}

                        * Example for a new motto{"\n"}
                        I want to feel like a bear who has thick fur.{"\n"}
                        I want to act like a young woman on the Vespa, cool and with fullspeed.{"\n"}
                        I want to be like the lotus and grow at my own pace.{"\n"}
                        I want to go step for step at my own pace.  {"\n"}
                    </Text>
                    <TextInput style={{backgroundColor: '#ededed', height: 20}} value={'your new motto'}/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    text: {
      fontSize: 10,
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