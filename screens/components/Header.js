import React from 'react';
import {View} from "react-native";
import {Image} from "react-native-expo-image-cache";

export const Header = () => {
    return <View style={{alignItems: 'center', backgroundColor:'#f2f2f2'}}>
        <Image uri="https://firebasestorage.googleapis.com/v0/b/zrmapp-ca71d.appspot.com/o/icon.png?alt=media&token=47e4c825-522e-4efa-baec-4b85c4827ed5" style={{
            height: 55,
            width: 80,
        }}/>
    </View>;
};