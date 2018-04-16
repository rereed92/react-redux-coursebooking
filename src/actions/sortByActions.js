import * as types from './actionTypes';

import sortApi from '../api/sortBy';

export function loadSortBy() {
    return function(dispatch) {
        return sortApi.getSortOptions()
            .then(sortOptions => {
                dispatch(loadSortBySuccess(sortOptions));
            }).catch(error => {
                throw(error);
            });
    };
}

export function loadSortBySuccess(sortOptions) {
    return { 
        type: types.LOAD_SORTBY_SUCCESS,
        sortOptions 
    };
}