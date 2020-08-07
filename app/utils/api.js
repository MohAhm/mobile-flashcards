import { AsyncStorage } from 'react-native'

export const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks'

let decks = {
    '8xf0y6ziyjabvozdd253nd': {
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
    'am8ehyc8byjqgar0jgpub9': {
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

export const _saveDeckTitle = async (title) => {
    try {
        const id = generateUID()

        const deck = {
            id,
            title,
            questions: []
        }

        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[id]: deck}))

        return deck
    } catch (error) {
        console.log(error)
    }
}

export const _removeDeck = async (id) => {
    try {
        const values = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        const items = JSON.parse(values)

        items[id] = undefined
        delete items[id]

        await AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(items))
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