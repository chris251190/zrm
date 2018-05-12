import React from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseTwo extends React.Component {
    state = {
        modalVisible: false,
        currentImage: null,
        ideas: null,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setCurrentImage(currentImage) {
        this.setState({currentImage: currentImage});
    }

    setIdeas(ideas) {
        this.setState({ideas: ideas});
    }

    render() {
        return (
            <View>
                <View><Text style={styles.header}>Choose an image</Text></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 300,
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    <View style={{marginTop: 22}}>
                        {this.renderModal()}
                    </View>
                    <FlatList
                        data={imageData}
                        renderItem={({item}) => this.renderImage(item)}
                        numColumns={3}
                    />
                </View>
            </View>
        );
    }

    renderModal() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = this.state.currentImage;
        return <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, marginTop: 50, marginBottom: 30}}>Is this your image?</Text>
                <Image {...{preview, uri}} style={styles.modalImage}/>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Ionicons style={{marginRight: 30}} name="md-close-circle" size={70} color="red"/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.props.imageHandler(this.state.currentImage);
                    this.props.ideasHandler(this.state.ideas);
                    this.setModalVisible(!this.state.modalVisible);
                }}>
                    <Ionicons style={{marginLeft: 30}} name="md-checkmark-circle" size={70} color="green"/>
                </TouchableHighlight>
            </View>
        </Modal>;
    }

    renderImage(item) {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = item.uri;

        return <TouchableHighlight onPress={() => {
            this.setModalVisible(true);
            this.setCurrentImage(item.uri);
            this.setIdeas(item.ideas);
        }}>
            <Image style={{height: 100, width: 100}} {...{preview, uri}} />
        </TouchableHighlight>;
    }
};

const imageData = [
    {
        key: 1,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e",
        ideas: [{key: "fly"}, {key: "be free"}, {key: "I'm like a bird"}, {key: "soul"}, {key: "to be on top of things"}]
    },
    {
        key: 2,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/FACC3E30-2D60-4A56-A4CD-FAE531527816.jpeg?alt=media&token=c99762b8-1b91-4f03-a81d-80c2cc5b0310",
        ideas: [{key: "to find your way"}, {key: "light"}, {key: "nature"}, {key: "strong and stable"}, {key: "power"}, {key: "nature's colors"}, {key: "fresh"}, {key: "mysterious"}]

    },
    {
        key: 3,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/0CC93F61-4644-4D6F-8C9C-63B3F9D92184.jpeg?alt=media&token=a42c6095-0cb8-40ab-9e0a-fc30ce48db47",
        ideas: [{key: "strong"}, {key: "lion king"}, {key: "power"}, {key: "guard"}, {key: "safety"}, {key: "treasure"}, {key: "force"}, {key: "hunter"}]

    },
    {
        key: 4,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/2AD4AF30-473C-47F3-B6E6-B009EE29684C.jpeg?alt=media&token=9c774c08-e7d0-4809-942f-357866a26030",
        ideas: [{key: "wide"}, {key: "sunrise"}, {key: "mountains"}, {key: "be free"}, {key: "sky"}, {key: "colorful"}]

    },
    {
        key: 5,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/angel.JPG?alt=media&token=84b9a2a2-7087-4613-a84c-8d176f2a915f",
        ideas: [{key: "angel"}, {key: "on top"}, {key: "almighty"}, {key: "light"}, {key: "fly"}, {key: "soul"}]

    },
    {
        key: 6,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/2F8046B0-E977-45E7-B8EC-CEB314EB9783.jpeg?alt=media&token=841bfdbc-bcd1-4bb0-85d8-67ec5d7f0436",
        ideas: [{key: "enjoy"}, {key: "sweet"}, {key: "have fun in life"}, {key: "travel"}, {key: "culture"}, {key: "relax"}, {key: "take your time"}]

    },
    {
        key: 7,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/4D39C979-A571-4AF5-BE05-DA2714D67D15.jpeg?alt=media&token=1c48a878-9f06-4ca8-96b6-e1f3a25fe65c",
        ideas: [{key: "be free"}, {key: "achieved it all"}, {key: "life is an adventure"}, {key: "travel"}, {key: "enjoy"}]

    },
    {
        key: 8,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/autopista.JPG?alt=media&token=09f242c8-486a-450b-b1c7-6a936a5052f7",
        ideas: [{key: "distance"}, {key: "overview"}, {key: "sunset"}, {key: "guide your way"}, {key: "to find your way"}, {key: "have a direction to go"}, {key: "orientation"}]

    },
    {
        key: 9,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/9C9FFA68-3105-41F0-B487-3FA10E601BDF.jpeg?alt=media&token=cba42fce-7a7b-4d09-9a9b-85613182766f",
        ideas: [{key: "sunset"}, {key: "colorful"}, {key: "light"}, {key: "red"}, {key: "energy"}, {key: "work is done"}, {key: "free"}]

    },
    {
        key: 10,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/AAA7C58C-E40C-4F4E-9A3C-8C5F52A327A7.jpeg?alt=media&token=bcb3c42b-e72f-4268-a965-861450fab1fe",
        ideas: [{key: "go up"}, {key: "easily"}, {key: "look up"}, {key: "step per step"}]

    },
    {
        key: 11,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/D123FF40-784E-4257-BA7D-B6285F5DCBFC.jpeg?alt=media&token=d1b3621b-11d0-47b3-afd1-0bd9aed3d8eb",
        ideas: [{key: "blue"}, {key: "cold"}, {key: "fast"}, {key: "lights in the night"}, {key: "modern"}, {key: "rich"}]

    },
    {
        key: 12,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/F4DEDED2-5177-4398-A6A3-D4FA3356F6A8.jpeg?alt=media&token=d00e623c-d89c-47d4-b097-65d346cb6cb2",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]


    },
    {
        key: 13,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/totoro.jpg?alt=media&token=0e01593f-14f1-4348-a472-2234bf0146b1",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 14,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/paintings.JPG?alt=media&token=37218b91-ef78-4eb8-80ef-341499992be3",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 15,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/splash.jpg?alt=media&token=219ef5b9-788e-43a1-8246-02a65b3f0363",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]


    },
    {
        key: 16,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/rose.jpg?alt=media&token=a602de14-98a3-4c0e-b36d-d538f10a417e",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 17,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/regenbogen.jpg?alt=media&token=0986dfa6-4199-4b06-a46b-6a5e079dc535",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]


    },
    {
        key: 18,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/nachts.jpg?alt=media&token=3b9c4dc9-df86-4a8d-ba12-03035f0b0404",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 19,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/light.jpg?alt=media&token=cd2b8aea-e745-411a-b3be-17c4a6aba89d",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 20,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/hund.jpg?alt=media&token=227b960f-2f43-445f-ada0-1b046344a199",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 21,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/himmel.jpg?alt=media&token=08ab8c9e-68bd-4fbe-bbdc-78fefd8b2377",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 22,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/gundam.jpg?alt=media&token=3935a2d6-c1e4-465b-ac72-6a632b5e30f3",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 23,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/gru%CC%88n.jpg?alt=media&token=1db9e44a-9b84-47ba-8145-657c353e5b8b",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 24,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/freunde.jpg?alt=media&token=468cd48a-89cf-4238-9e1d-212e24f5916b",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 25,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/dragonball.jpg?alt=media&token=56751507-e25a-420e-8398-7df30488b786",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 26,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/baum.jpg?alt=media&token=e13c3fa3-40f0-4f02-bc93-9adaa14f6dc1",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 27,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/19436461_1717795318514622_4266132070985629696_n.jpg?alt=media&token=fe9e112d-b0c0-4545-885b-feff49bcc1e8",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 28,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/17268105_186646421836433_2542958373985320960_n.jpg?alt=media&token=b2642c37-fab0-45de-b969-1434c7c169c4",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 29,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/welpe.jpg?alt=media&token=47aa78fb-ce12-4cc3-a983-6c85da2c07da",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 30,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/weite.jpg?alt=media&token=60664176-6959-4343-a449-c1fd5db65f2e",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 31,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/veilchen.jpg?alt=media&token=e6eb2bf8-70b5-4a71-8a7d-060937582742",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 32,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/steinwand.jpg?alt=media&token=029beca4-451e-40fd-a4ef-7d60c5ac560c",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 33,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/rosewall.jpg?alt=media&token=f85aab29-241f-4d88-8d38-39ce42d5c73b",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 34,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/orchide.jpg?alt=media&token=32b6bc11-9ef8-4db2-8e72-d4df1b73cc25",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 35,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/essen.jpg?alt=media&token=2fb8a947-fef7-4b8b-97c1-2e8e3b94a528",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    },
    {
        key: 36,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/blumen.jpg?alt=media&token=24167208-fa69-4f63-a0b6-803de3c429f3",
        ideas: [{key: "frosch"}, {key: "katze"}, {key: "hund"}]

    }


];

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 60,
        marginBottom: 10,
        marginRight: 10,
        resizeMode: 'contain',
    },
    modalImage: {
        width: 400,
        height: 500,
    },
    header: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    }
});



