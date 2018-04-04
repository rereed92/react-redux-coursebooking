import * as types from '../actions/actionTypes';

const sortByReducers = (state = [], action) => {
    switch(action.type) {
        case types.LOAD_SORTBY_SUCCESS:
            return action.sortBy;

        default:
            return state;
    }
};

export default sortByReducers;