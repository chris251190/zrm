import React from 'react';
import {Text} from "react-native";

const PlusNumber = ({number}) => {return number !== undefined && <Text style={{color: 'green'}}> +{number}<Text style={{color:'black'}}>, </Text></Text>};
export default PlusNumber;