import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import api  from '../utils/api'
import routes from '../navigation/routes'
import colors from '../config/colors'
import Screen from '../components/Screen'
import Deck from '../components/Deck'


export default function DeckListScreen({ navigation }) {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        // clear()
        loadDecks()
    }, [])

    const loadDecks = async () => {
        const decks = await api.getDecks()
        setDecks(decks)
    }

    const clear = async () => {
        await api.clearStorage()
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={Object.keys(decks)}
                keyExtractor={item  => decks[item].id}
                renderItem={({ item }) =>
                    <Deck
                        title={decks[item].title}
                        numCard={decks[item].questions.length + ' cards'}
                        onPress={() => navigation.navigate(routes.DECKDETAILS, decks[item])}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})
