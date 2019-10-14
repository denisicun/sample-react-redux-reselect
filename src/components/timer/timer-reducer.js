import { INCREASE_TIMER } from "./timer-actions";

export default function timerReducer(state = {
    currentTime: 0,
    status: 'active'
}, action){
    switch (action.type) {
        case INCREASE_TIMER:

            const nextTime = action.payload.currentTime + 1;

            return Object.assign({}, state, {
                currentTime: nextTime
            });
        default:
            return state;
    }
}