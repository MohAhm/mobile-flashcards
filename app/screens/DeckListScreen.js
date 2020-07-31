import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Screen from '../components/Screen'

export default function DeckListScreen() {
    return (
        <Screen style={styles.screen}>
            <Text>Deck List View</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {},
})
