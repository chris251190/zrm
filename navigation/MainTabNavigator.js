import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ZRMScreen from '../screens/ZRMScreen';
import DonateScreen from '../screens/DonateScreen';
import BackgroundInfoScreen from '../screens/BackgroundInfoScreen';
import ContactScreen from '../screens/ContactScreen';

export default TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Links: {
            screen: LinksScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
        ZRM: {
            screen: ZRMScreen,
        },
        Donate: {
            screen: DonateScreen,
        },
        BackgroundInfo: {
            screen: BackgroundInfoScreen,
        },
        Contact: {
            screen: ContactScreen,
        },
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-information-circle${focused ? '' : '-outline'}`
                                : 'md-information-circle';
                        break;
                    case 'Links':
                        iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
                        break;
                    case 'Settings':
                        iconName =
                            Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
                        break;
                    case 'ZRM':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-information-circle${focused ? '' : '-outline'}`
                                : 'md-information-circle';
                        break;
                    case 'Donate':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-information-circle${focused ? '' : '-outline'}`
                                : 'md-information-circle';
                        break;
                    case 'BackgroundInfo':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-information-circle${focused ? '' : '-outline'}`
                                : 'md-information-circle';
                        break;
                    case 'Contact':
                        iconName =
                            Platform.OS === 'ios'
                                ? `ios-information-circle${focused ? '' : '-outline'}`
                                : 'md-information-circle';
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{marginBottom: -3, width: 25}}
                        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                    />
                );
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);
