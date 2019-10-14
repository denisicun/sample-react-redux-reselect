import messagesReducer from './message-list/message-list-reducer';
import timerReducer from './timer/timer-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    messages: messagesReducer,
    timer: timerReducer,
});

export default rootReducer;