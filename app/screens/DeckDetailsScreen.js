import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { removeDeck } from '../actions'
import Screen from '../components/Screen'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes'
import colors from '../config/colors'


class DeckDetailsScreen extends Component{
    handleDeleteDeck = id => {
        this.props.dispatch(removeDeck(id))
        this.props.navigation.goBack();
    }

    render () {
        const { deck, navigation } = this.props

        if (!deck) return null

        return (
            <Screen style={styles.screen}>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{deck.title}</AppText>
                    <AppText style={styles.numCard}>{deck.questions.length} cards</AppText>
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton
                        title='Add Card'
                        outline
                        onPress={() => navigation.navigate(routes.NEWQUIZ, deck.id)}/>

                    <AppButton title='Start Quiz' onPress={() => navigation.navigate(routes.QUIZ)}/>

                    <AppButton
                        title='Delete Deck'
                        color='danger'
                        outline
                        onPress={() => this.handleDeleteDeck(deck.id)}/>
                </View>
            </Screen>
        )
    }
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

function mapStateToProps(state, { route }) {
    const { title } = route.params

    return {
        deck: state[title],
    }
}

export default connect(mapStateToProps)(DeckDetailsScreen)