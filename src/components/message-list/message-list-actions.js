export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addNewMessage(author, title){
    return {
        type: ADD_MESSAGE,
        payload: {
            message: {
                author,
                title
            }
        }
    }
}