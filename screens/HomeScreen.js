import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View,} from 'react-native';
import {MonoText} from '../components/StyledText';
import {translate} from 'react-i18next';
import {Header} from "./components/Header";

@translate(['home', 'common'], { wait: true })
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: <Header/>,
    };

    render() {
        const { t, i18n, navigation } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.container}>
                        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>
                        <Button
                            onPress={() => { i18n.changeLanguage('en') }}
                            title={t('common:actions.toggleToEnglish')}
                        />
                        <Button
                            onPress={() => { i18n.changeLanguage('de') }}
                            title={t('common:actions.toggleToGerman')}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>

                        <View><Text style={styles.homeTitle}>{t('home:heading')}</Text></View>

                        <Text style={styles.introduction}>{t('home:introduction')}</Text>

                        <Text style={styles.getStartedText}>When you want to dive in directly click on</Text>
                        <MonoText style={styles.codeHighlightText}>'ZRM'</MonoText>

                        <Text style={styles.getStartedText}>When you want to have more Background Information of what
                            ZRM is and how and why
                            it works, click on</Text>

                        <MonoText style={styles.codeHighlightText}>'Info'</MonoText>

                        <Text style={styles.getStartedText}>If you want to know more about the developer, then click
                            on </Text>
                        <MonoText style={styles.codeHighlightText}>'Contact'</MonoText>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
        marginBottom: 20,
    },
    homeTitle: {
        fontSize: 20,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    introduction: {
        fontSize: 15,
        color: 'rgba(90,100,109, 1)',
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    getStartedText: {
        fontSize: 16,
        color: 'rgba(90,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
});
