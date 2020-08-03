import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Platform } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'

export default function Deck({ title, numCard, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deck}>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.numCard}>{numCard}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    deck: {
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        backgroundColor: colors.white,
        marginBottom: 20,
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    detailsContainer: {
        padding: 20,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        marginBottom: 10,
    },

    numCard: {
        color: colors.gray,
        fontWeight: 'bold',
    },
})
