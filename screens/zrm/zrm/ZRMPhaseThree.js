import React from 'react';
import {
    FlatList,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {Image} from "react-native-expo-image-cache";

export default class ZRMPhaseThree extends React.Component {
    state = {
        associations: [],
        inputValue: '',
        ideasModalVisible: false,
        scaleModalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ideasModalVisible: visible});
    }

    setScaleModalVisible(visible) {
        this.setState({scaleModalVisible: visible});
    }

    render() {
        const preview = {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="};
        const uri = this.props.chosenImage;
        return (
            <View>
                <Text style={styles.homeTitle}>Write down positive resources you see in the image</Text>
                <Image {...{preview, uri}} style={styles.image}/>
                <View>
                    {this.renderIdeasModal(this.props.ideas)}
                    {this.renderScaleModal()}
                    {this.renderNeedIdeasText()}
                </View>

                <Text>Your ideas:</Text>
                {this.renderTextInput()}
                <FlatList
                    data={this.state.associations}
                    renderItem={({item}) => this.renderListItem(item)}
                />
            </View>
        );
    }

    renderTextInput() {
        return <View style={{flexDirection: 'row'}}>
            <TextInput
                value={this.state.inputValue}
                style={{backgroundColor: '#ededed', height: 30, marginBottom: 10, marginRight: 20, flex: 1}}
                onChangeText={(inputValue) => this.setState({inputValue: inputValue})}
                onSubmitEditing={() => {
                    this.setState({associations: [...this.state.associations, {key: this.state.inputValue}]});
                    this.props.handler([...this.state.associations, {key: this.state.inputValue}]);
                    this.setState({inputValue: ''});
                }}/>
            {this.isInputEmpty() && this.renderClearButton()}
        </View>;
    }

    renderNeedIdeasText() {
        return <TouchableWithoutFeedback onPress={() => {
            this.setModalVisible(true);
        }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10
            }}>
                <Ionicons style={{marginRight: 10}}
                          name={Platform.OS === 'ios' ? "ios-basket" : "md-basket"}
                          size={30} color="blue"/>
                <Text>Need ideas?</Text>
            </View>
        </TouchableWithoutFeedback>;
    }

    renderScaleModal() {
        return <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.scaleModalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
                <View>

                    <TouchableHighlight
                        onPress={() => {
                            this.setScaleModalVisible(!this.state.scaleModalVisible);
                        }}>
                        <Ionicons name={Platform.OS === 'ios' ? "ios-close" : "md-close"} size={30}/>
                    </TouchableHighlight>
                    <Text>Scale 1 Scale 2</Text>
                </View>
            </View>
        </Modal>;
    }

    renderIdeasModal(ideas) {
        return <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.ideasModalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
                <View>

                    <TouchableHighlight
                        onPress={() => {
                            this.setModalVisible(!this.state.ideasModalVisible);
                        }}>
                        <Ionicons name={Platform.OS === 'ios' ? "ios-close" : "md-close"} size={30}/>
                    </TouchableHighlight>
                    <FlatList
                        data={ideas}
                        renderItem={({item}) => this.renderModalItem(item.key)}
                    />
                </View>
            </View>
        </Modal>;
    }

    renderModalItem(item) {
        return <View style={styles.oneRow}>
            <Text>{item}</Text>
            <TouchableHighlight style={{
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 5,
                marginLeft: 20,
                height: 30,
            }} onPress={() => {
                this.setState({associations: [...this.state.associations, {key: item}]});
                this.props.handler([...this.state.associations, {key: item}]);
            }}>
                <Ionicons name={Platform.OS === 'ios' ? "ios-add" : "md-add"}
                          size={20} color="black"/>
            </TouchableHighlight>
        </View>;
    }

    isInputEmpty() {
        return (this.state.inputValue !== null && this.state.inputValue !== '');
    }

    renderClearButton() {
        return <TouchableHighlight onPress={() => {
            this.setState({inputValue: ''});
        }}>
            <Ionicons name={Platform.OS === 'ios' ? "ios-close" : "md-close"} size={30}/>
        </TouchableHighlight>;
    }

    renderListItem(item) {
        return <View style={{marginTop: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={styles.item}>
                    - {item.key}
                </Text>
                <TouchableWithoutFeedback onPress={() => {
                    this.setScaleModalVisible(true);
                }}>
                    <Ionicons style={{flex:0.3}} name={Platform.OS === 'ios' ? "ios-add" : "md-add"} size={25}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => {
                    this.handlePress(item);
                }}>
                    <Ionicons name={Platform.OS === 'ios' ? "ios-trash" : "md-trash"} size={25}/>
                </TouchableWithoutFeedback>
            </View>
            {this.lineSeparator()}
        </View>;
    }

    handlePress(item) {
        let array = this.state.associations;
        let index = array.indexOf(item);
        array.splice(index, 1);

        if (array.length === 0) {
            this.setState({associations: []});
            this.props.handler(this.state.associations);
        } else {
            this.setState({associations: array});
            this.props.handler(this.state.associations);
        }
    }

    lineSeparator() {
        return <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>;
    }
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginTop: 3,
        marginBottom: 20,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        flex: 0.6
    },
    oneRow: {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}
});



