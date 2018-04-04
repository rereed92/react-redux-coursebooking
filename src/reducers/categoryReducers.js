import * as types from '../actions/actionTypes';

const categoryReducers = (state = [], action) => {
    switch(action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            return action.categories;

        default:
            return state;
    }
};

export default categoryReducers;