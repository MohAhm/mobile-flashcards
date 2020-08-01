import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'

export default function IndividualDeckScreen({ navigation }) {
    return (
        <Screen>
            <Text>Individual Deck View</Text>

            <Button
                title='Add Card'
                onPress={() => navigation.navigate(routes.NEWQUESTION)}
            />

            <Button
                title='Start Quiz'
                onPress={() => navigation.navigate(routes.QUIZ)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
