import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'

export default function NewDeckScreen({ navigation }) {
    return (
        <Screen>
            <Text>New Deck View</Text>

            <Button
                title='Create Deck'
                onPress={() => navigation.navigate(routes.DECKDETAILS, 'New')}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
