import { _getDecks, _saveDeckTitle, _removeDeck, clearStorage } from "../utils/api"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'


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

export function deleteDeck (id) {
    return {
        type: DELETE_DECK,
        id
    }
}


export function getDecks () {
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
        return _removeDeck(id).then(() => {
            dispatch(deleteDeck(id))
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