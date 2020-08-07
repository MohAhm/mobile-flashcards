import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { getDecks, clearData } from '../actions'
import routes from '../navigation/routes'
import colors from '../config/colors'
import Screen from '../components/Screen'
import Deck from '../components/Deck'
import AppText from '../components/AppText'


class DeckListScreen extends Component {
    componentDidMount() {
        // this.props.dispatch(clearData()) // temp
        this.props.dispatch(getDecks())
    }

    render () {
        const { decks, navigation } = this.props
        console.log(decks)

        if (Object.entries(decks).length === 0) {
            return (
                <Screen style={styles.screen}>
                    <AppText style={styles.text}>You don't have any decks. Why don't you create new deck?</AppText>
                </Screen>
            )
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
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
})

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckListScreen)
