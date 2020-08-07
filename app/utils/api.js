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

const getDecks = async () => {
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

const saveDeckTitle = async (title) => {
    try {
        const item = {
            id: generateUID(),
            title,
            questions: []
        }

        await AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[title]: item}))
    } catch (error) {
        console.log(error)
    }
}

const clearStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.log(error)
    }
}

export default {
    getDecks,
    saveDeckTitle,
    clearStorage, //temp...
}
