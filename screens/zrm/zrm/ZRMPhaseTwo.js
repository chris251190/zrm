import React from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";
import * as firebase from 'firebase';

export default class ZRMPhaseTwo extends React.Component {
    state = {
        modalVisible: false,
        currentImage: null,
        ideas: null,
        imageData: null
    };

    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var items = [];
            snap.forEach((child) => {
                items.push({
                    uri: child.val().uri,
                    ideas: child.val().ideas.toString().split(","),
                });
            });

            this.setState({
                imageData: items
            });

        });
    }

    componentDidMount(){
        this.listenForItems(firebase.database().ref('images/'));
    }

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
                        data={this.state.imageData}
                        renderItem={({item}) => this.renderImage(item)}
                        keyExtractor={(item, index) => index}
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



