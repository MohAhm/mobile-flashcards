import React from 'react'
import { StyleSheet, Text, Button, FlatList } from 'react-native'

import Screen from '../components/Screen'
import routes from '../navigation/routes'
import Deck from '../components/Deck'

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const decks = [
    {
        id: generateUID(),
        title: 'React',
        numCard: 2,
    },

    {
        id: generateUID(),
        title: 'JavaScript',
        numCard: 1,
    }
]

export default function DeckListScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={decks}
                keyExtractor={decks => decks.id.toString()}
                renderItem={({ item }) =>
                    <Deck
                        title={item.title}
                        numCard={item.numCard + ' cards'}
                        onPress={() => navigation.navigate(routes.INDIVIDUALDECK, item)}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
})
