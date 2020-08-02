import React from 'react'
import { StatusBar, StyleSheet, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <StatusBar barStyle='light-content'/>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light,
    },

    view: {
        flex: 1,
    },
})
