import * as types from './actionTypes';

import sortApi from '../api/sortBy';

export function loadSort() {
    return function(dispatch) {
        return sortApi.getSort()
            .then(sort => {
                dispatch(loadSortSuccess(sort));
            }).catch(error => {
                throw(error);
            });
    };
}

export function loadSortSuccess(sort) {
    return { 
        type: types.LOAD_SORT_SUCCESS,
        sort
    };
}

export function updateSortOption(option) {
    return function(dispatch) {
        return sortApi.updateSortOption(option)
            .then(option => {
                dispatch(updateSortOptionSuccess(option));
            }).catch(error => {
                throw(error);
            });
    };
}

export function updateSortOptionSuccess(option) {
    return { 
        type: types.UPDATE_SORT_OPTION,
        option
    };
}