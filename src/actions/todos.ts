import { ADD_TODO } from '../constants/actionTypes';

export const addTodo = (content) => (dispatch) => {
    dispatch({
        type: ADD_TODO,
        payload: content
    });
};