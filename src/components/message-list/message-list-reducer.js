import { ADD_MESSAGE } from "./message-list-actions";


export default function messagesReducer(state = {
    // list: {
    //     1: {
    //         title: 'React is awesome!',
    //         author: 'me'
    //     },
    //     2: {
    //         title: 'Redux is awesome!',
    //         author: 'me'
    //     },
    //     3: {
    //         title: 'Reselect is awesome!',
    //         author: 'you'
    //     }
    // },
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

// function searchReducer(state = {
//     term: '',
//     page: 0,
//     limit: 20
// }, action){
//     switch (action.type) {
//         case 'CHANGE_TERM':
//             const newState = Object.assign({}, state);
//             newState.term = action.payload.term;
//             return newState;
//         default:
//             return state;
//     }
// }

// const chatReducer = combineReducers({
//    list: messagesReducer,
//    search: searchReducer,
// });

