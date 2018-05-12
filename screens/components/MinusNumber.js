import React from 'react';
import {Text} from "react-native";

const NegativeNumber = ({number}) => {return number !== undefined && <Text style={{color: 'red'}}> -{number}</Text>};
export default NegativeNumber;