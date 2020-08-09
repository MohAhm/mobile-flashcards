import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks'

let decks = {
    React: {
        id: '8xf0y6ziyjabvozdd253nd',
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        id: 'am8ehyc8byjqgar0jgpub9',
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}


function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const _getDecks = async () => {
    try {
        const values = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        const items = JSON.parse(values)

        if (items) return items

        await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))

        return decks
    } catch (error) {
        console.log(error)
    }
}

export const _getDeck = async (id) => {
    try {
        const values = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        const items = JSON.parse(values)

        for (let deck in items) {
            if (items[deck].id === id)
                return items[deck]
        }
    } catch (error) {
        console.log(error)
    }
}

export const _saveDeckTitle = async (title) => {
    try {
        const id = generateUID()

        const deck = {
            id,
            title,
            questions: []
        }

        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[title]: deck}))

        return deck
    } catch (error) {
        console.log(error)
    }
}

export const _removeDeck = async (id) => {
    try {
        const values = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        const items = JSON.parse(values)

        const deck = await _getDeck(id)

        items[deck.title] = undefined
        delete items[deck.title]

        await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(items))

        return deck
    } catch (error) {
        console.log(error)
    }
}

export const _addCardToDeck = async (id, card) => {
    try {
        const deck = await _getDeck(id)

        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
            [deck.title]: {
                questions: [...deck.questions].concat(card)
            }
        }))

        return deck
    } catch (error) {
        console.log(error)
    }
}

// temp ...
export const clearStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.log(error)
    }
}