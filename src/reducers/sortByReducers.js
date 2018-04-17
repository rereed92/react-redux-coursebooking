import * as types from '../actions/actionTypes';

import initialState from './initialState';

const sortByReducers = (state = initialState.sort, action) => {
    switch(action.type) {
        case types.LOAD_SORT_SUCCESS:
            return action.sort;

        case types.UPDATE_SORT_OPTION:
            return Object.assign({}, state, { option: action.option });

        default:
            return state;
    }
};

export default sortByReducers;