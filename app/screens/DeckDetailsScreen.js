import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'

export default function DeckDetailsScreen({ navigation, route }) {
    const deck = route.params

    return (
        <Screen>
            <Text>{deck.title}</Text>

            <Button
                title='Add Card'
                onPress={() => navigation.navigate(routes.NEWQUIZ)}
            />

            <Button
                title='Start Quiz'
                onPress={() => navigation.navigate(routes.QUIZ)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
