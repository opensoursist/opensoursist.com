import { ADD_TODO } from '../constants/actionTypes';

const defaultState = [
    '学习 HTML'
];

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}