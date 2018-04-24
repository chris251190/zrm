import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
                    <Image source={this.state.currentImage} style={styles.modalImage}/>
                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Close (X)</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{marginTop:10}}
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
        return <TouchableHighlight onPress={() => {
            this.setModalVisible(true);
            this.setCurrentImage(item.imageName);
        }}>
            <Image key={item.key} source={item.imageName} style={styles.image}/>
        </TouchableHighlight>;
    }
};

const imageData = [
    {key: 1, imageName: require('../../../assets/images/angel.jpg')},
    {key: 2, imageName: require('../../../assets/images/autopista.jpg')},
    {key: 3, imageName: require('../../../assets/images/cheesecake.jpg')},
    {key: 4, imageName: require('../../../assets/images/churros.jpg')},
    {key: 5, imageName: require('../../../assets/images/flowers.jpg')},
    {key: 6, imageName: require('../../../assets/images/guell.jpg')},
    {key: 7, imageName: require('../../../assets/images/hafencity_1.jpg')},
    {key: 8, imageName: require('../../../assets/images/hafencity_2.jpg')},
    {key: 9, imageName: require('../../../assets/images/heartdoor.jpg')},
    {key: 10, imageName: require('../../../assets/images/landscape.jpg')},
    {key: 11, imageName: require('../../../assets/images/lion.jpg')},
    {key: 12, imageName: require('../../../assets/images/nature.jpg')},
    {key: 13, imageName: require('../../../assets/images/palmera.jpg')},
    {key: 14, imageName: require('../../../assets/images/stairs.jpg')},
    {key: 15, imageName: require('../../../assets/images/street.jpg')},
    {key: 16, imageName: require('../../../assets/images/sunrise.jpg')},
    {key: 17, imageName: require('../../../assets/images/town.jpg')},
    {key: 18, imageName: require('../../../assets/images/windows.jpg')},
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



