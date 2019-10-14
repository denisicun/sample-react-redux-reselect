import { ADD_MESSAGE } from "./message-list-actions";


export default function messagesReducer(state = {
    list: [
        {
            title: 'React is awesome!',
            author: 'me'
        },
        {
            title: 'Redux is awesome!',
            author: 'me'
        },
        {
            title: 'Reselect is awesome!',
            author: 'you'
        }
    ],
    searchAuthor: 'me',
}, action){
    switch (action.type) {
        case ADD_MESSAGE:

            const newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload.message;

            return newState;
        default:
            return state;
    }
}

