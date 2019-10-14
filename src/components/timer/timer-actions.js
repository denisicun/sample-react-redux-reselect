export const INCREASE_TIMER = 'INCREASE_TIMER';

export function increaseTimer(currentTime) {
    return {
        type: INCREASE_TIMER,
        payload: {
            currentTime,
        }
    }
}
