import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import QuizList from '../components/QuizList'
import AppText from '../components/AppText'
import colors from '../config/colors'
import { clearLocalNotification, setLocalNatification } from '../utils/notification'


export default function QuizScreen({ route, navigation }) {
    useEffect(() => {
        clearLocalNotification()
            .then(setLocalNatification)
    }, [])

    const questions = route.params

    if (questions.length === 0) {
        return (
            <Screen style={styles.center}>
                <AppText style={styles.text}>
                    Sorry, you cannot take a quiz because there are no cards in the deck.
                </AppText>
            </Screen>
        )
    }

    return (
        <Screen>
            <QuizList questions={questions} navigation={navigation} />
        </Screen>
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
        fontSize: 22,
        color: colors.purple,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})