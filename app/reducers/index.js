import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK } from "../actions";


export default function decks (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }

        case ADD_DECK:
            const { deck } = action

            return {
                ...state,
                [deck.id]: deck
            }

        case DELETE_DECK:
            const { id } = action
            const { [id]: value, ...restState } = state

            return restState


        default:
            return state
    }
}