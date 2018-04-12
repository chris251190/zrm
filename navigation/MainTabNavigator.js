import React from 'react';
import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TabBarBottom, TabNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ZRMScreen from '../screens/ZRMScreen';
import DonateScreen from '../screens/DonateScreen';
import BackgroundInfoScreen from '../screens/BackgroundInfoScreen';
import ContactScreen from '../screens/ContactScreen';

export default TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        ZRM: {
            screen: ZRMScreen,
        },
        BackgroundInfo: {
            screen: BackgroundInfoScreen,
        },
        Donate: {
            screen: DonateScreen,
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
                    case 'ZRM':
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
                    case 'Donate':
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
