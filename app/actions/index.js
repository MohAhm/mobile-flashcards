import { _getDecks, _saveDeckTitle, _removeDeck, _addCardToDeck, clearStorage } from "../utils/api"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'


export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function deleteDeck (deck) {
    return {
        type: DELETE_DECK,
        deck,
    }
}

export function addCard(deck, card) {
    return {
        type: ADD_CARD,
        deck,
        card,
    }
}

export function handleInitialData () {
    return dispatch => {
        return _getDecks().then(decks => {
            dispatch(receiveDecks(decks))
        })
    }
}

export function saveDeckTitle(title) {
    return dispatch => {
        return _saveDeckTitle(title).then(deck => {
            dispatch(addDeck(deck))
        })
    }
}

export function removeDeck(id) {
    return dispatch => {
        return _removeDeck(id).then(deck => {
            dispatch(deleteDeck(deck))
        })
    }
}

export function addCardToDeck(id, card) {
    return dispatch => {
        return _addCardToDeck(id, card).then(deck => {
            dispatch(addCard(deck, card))
        })
    }
}
