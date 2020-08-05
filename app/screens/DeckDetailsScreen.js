import React from 'react'
import { StyleSheet, View } from 'react-native'

import Screen from '../components/Screen'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes'
import colors from '../config/colors'

export default function DeckDetailsScreen({ navigation, route }) {
    const deck = route.params

    return (
        <Screen style={styles.screen}>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{deck.title}</AppText>
                <AppText style={styles.numCard}>{deck.numCard} cards</AppText>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton
                    title='Add Card'
                    outline
                    onPress={() => navigation.navigate(routes.NEWQUIZ)}/>

                <AppButton title='Start Quiz' onPress={() => navigation.navigate(routes.QUIZ)}/>

                <AppButton
                    title='Delete Deck'
                    color='danger'
                    outline
                    onPress={() => console.log('Deleted!')}/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },

    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 36,
        color: colors.purple,
        marginBottom: 10,
    },

    numCard: {
        fontSize: 20,
        color: colors.gray,
        fontWeight: 'bold',
    },

    buttonContainer: {
        flex: 1,
        padding: 20,
    },
})
