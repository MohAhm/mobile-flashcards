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

export function deleteDeck (title) {
    return {
        type: DELETE_DECK,
        title,
    }
}

export function addCard(title, card) {
    return {
        type: ADD_CARD,
        title,
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
        return _removeDeck(id).then(title => {
            dispatch(deleteDeck(title))
        })
    }
}

export function addCardToDeck(id, card) {
    return dispatch => {
        return _addCardToDeck(id, card).then(title => {
            dispatch(addCard(title, card))
        })
    }
}



export const CLEAR_DATA = 'CLEAR_DATA' // temp ...

// temp ...
export function clear() {
    return {
        type: CLEAR_DATA,
    }
}

// temp ...
export function clearData() {
    return dispatch => {
        return clearStorage().then(() => {
            dispatch(clear())
        })
    }
}