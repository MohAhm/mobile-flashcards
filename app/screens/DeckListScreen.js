import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { handleInitialData, clearData } from '../actions'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import Deck from '../components/Deck'
import routes from '../navigation/routes'
import colors from '../config/colors'


class DeckListScreen extends Component {
    componentDidMount() {
        // this.props.dispatch(clearData()) // temp
        this.props.dispatch(handleInitialData())
    }

    render () {
        const { decks, navigation } = this.props

        if (Object.entries(decks).length === 0) {
            return (
                <Screen style={styles.center}>
                    <AppText style={styles.text}>You don't have any decks. Why don't you create a new deck?</AppText>
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

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.light,
    },

    text: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckListScreen)
