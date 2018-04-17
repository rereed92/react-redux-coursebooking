import * as types from '../actions/actionTypes';

import initialState from './initialState';

const sort = (key, asc=true) => {
    return function(a, b) {  
        if (a[key] > b[key]) {  
            return asc ? 1 : -1  
        } else if (a[key] < b[key]) {  
            return asc ? -1 : 1;
        }  
        return 0;  
    };
};

const courseReducers = (state = initialState.courses, action) => {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.ADD_COURSE:
            return [
                ...state,
                Object.assign({}, action)
            ];

        case types.UPDATE_COURSE:
            return [
                ...state.filter((course) => course.id !== action.id),
                Object.assign({}, action)
            ];

        case types.REMOVE_COURSE:
            return state.filter((item) => {
                return item.id !== action.id;
            });

        case types.SORT_COURSE:
            return [...state].sort(sort(action.option, action.order === 'asc' ? true : false));

        default:
            return state;
    }
};

export default courseReducers;