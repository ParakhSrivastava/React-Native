import { useIsFocused } from "@react-navigation/core";
import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from "react-native";

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar
