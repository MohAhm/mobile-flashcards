import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'

import colors from '../config/colors'

export default function AppText({ children, style, ...otherProps }) {
    return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }
})