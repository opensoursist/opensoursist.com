import { ADD_TODO } from '../constants/actionTypes';

const defaultState = [
    '学习 HTML'
];

interface Action {
    type: string;
    payload: typeof defaultState;
}

export default function (state = defaultState, action: Action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}