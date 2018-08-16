import { Dispatch } from 'redux';

import { ADD_TODO } from '../constants/actionTypes';

export const addTodo = (content: string) => (dispatch: Dispatch) => {
    dispatch({
        type: ADD_TODO,
        payload: content
    });
};