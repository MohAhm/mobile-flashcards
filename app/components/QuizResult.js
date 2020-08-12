import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import AppText from './AppText'
import AppButton from './AppButton'
import colors from '../config/colors'

export default function QuizResult({ percentage, onRestart, onBack }) {
    return (
        <View style={styles.center}>
            <Ionicons name="md-happy" size={100} color={colors.lightPurp} />
            <AppText style={styles.text}>You have learnt {percentage}% of the terms.</AppText>

            <AppButton title='Back to Deck' onPress={onBack}/>
            <AppButton title='Restart Quiz' outline onPress={onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    text: {
        fontSize: 20,
        color: colors.purple,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 40,
    },
})
