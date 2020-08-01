import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'

export default function DeckListScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <Text>Deck List View</Text>

            <Button
                title='Go to Individual Deck'
                onPress={() => navigation.navigate(routes.INDIVIDUALDECK)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {},
})
