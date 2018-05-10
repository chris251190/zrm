import React from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseTwo extends React.Component {
    state = {
        modalVisible: false,
        currentImage: null,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setCurrentImage(currentImage) {
        this.setState({currentImage: currentImage});
    }

    render() {
        return (
            <View>
                <View><Text style={styles.header}>Choose an image</Text></View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: 300,
                    height: 500,
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
            <View style={{marginTop: 22}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, marginTop: 20, marginBottom: 20}}>Is this your image?</Text>
                    <Image {...{preview, uri}} style={styles.modalImage}/>
                    <TouchableHighlight style={{marginTop: 10}}
                                        onPress={() => {
                                            this.props.handler(this.state.currentImage);
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                        <Ionicons name="md-checkmark-circle" size={32} color="green"/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Ionicons name="md-close-circle" size={32} color="red"/>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>;
    }

    renderImage(item) {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = item.uri;

        return <TouchableHighlight onPress={() => {
            this.setModalVisible(true);
            this.setCurrentImage(item.uri);
        }}>
            <Image style={{height: 100, width: 100}} {...{preview, uri}} />
        </TouchableHighlight>;
    }
};

const imageData = [
    {
        key: 1,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"
    },
    {
        key: 2,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/FACC3E30-2D60-4A56-A4CD-FAE531527816.jpeg?alt=media&token=c99762b8-1b91-4f03-a81d-80c2cc5b0310"
    },
    {
        key: 3,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/0CC93F61-4644-4D6F-8C9C-63B3F9D92184.jpeg?alt=media&token=a42c6095-0cb8-40ab-9e0a-fc30ce48db47"
    },
    {
        key: 4,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/2AD4AF30-473C-47F3-B6E6-B009EE29684C.jpeg?alt=media&token=9c774c08-e7d0-4809-942f-357866a26030"
    },
    {
        key: 5,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/2B7C61D8-662B-4738-882F-0A7A47CA15FF.jpeg?alt=media&token=cee26099-4d90-42f7-b561-dc874b6c3633"
    },
    {
        key: 6,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/2F8046B0-E977-45E7-B8EC-CEB314EB9783.jpeg?alt=media&token=841bfdbc-bcd1-4bb0-85d8-67ec5d7f0436"
    },
    {
        key: 7,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/4D39C979-A571-4AF5-BE05-DA2714D67D15.jpeg?alt=media&token=1c48a878-9f06-4ca8-96b6-e1f3a25fe65c"
    },
    {
        key: 8,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/7613EC0A-648F-4427-910C-974E6EF83504.jpeg?alt=media&token=3f100bd7-7724-419e-b19e-e9a8e71d521f"
    },
    {
        key: 9,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/9C9FFA68-3105-41F0-B487-3FA10E601BDF.jpeg?alt=media&token=cba42fce-7a7b-4d09-9a9b-85613182766f"
    },
    {
        key: 10,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/AAA7C58C-E40C-4F4E-9A3C-8C5F52A327A7.jpeg?alt=media&token=bcb3c42b-e72f-4268-a965-861450fab1fe"
    },
    {
        key: 11,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/D123FF40-784E-4257-BA7D-B6285F5DCBFC.jpeg?alt=media&token=d1b3621b-11d0-47b3-afd1-0bd9aed3d8eb"
    },
    {
        key: 12,
        uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/F4DEDED2-5177-4398-A6A3-D4FA3356F6A8.jpeg?alt=media&token=d00e623c-d89c-47d4-b097-65d346cb6cb2"
    },
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



