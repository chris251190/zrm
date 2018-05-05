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
                    <Text>Is this your image?</Text>
                    <Image {...{preview, uri}} style={styles.modalImage}/>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Close (X)</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{marginTop: 10}}
                                        onPress={() => {
                                            this.props.handler(this.state.currentImage);
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                        <Text>Choose (Y)</Text>
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
    {key: 1, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 2, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/FACC3E30-2D60-4A56-A4CD-FAE531527816.jpeg?alt=media&token=c99762b8-1b91-4f03-a81d-80c2cc5b0310"},
    {key: 3, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 4, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 5, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 6, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 7, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 8, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 9, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 10, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 11, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
    {key: 12, uri: "https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/E2EFF9A9-1B7B-4FDB-82C6-8FC6897F2AC5.jpeg?alt=media&token=a463ac95-131c-4a6f-92f0-92556fa5f51e"},
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



