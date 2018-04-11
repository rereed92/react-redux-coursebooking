import * as types from './actionTypes';

import sortBy from '../api/sortBy';

export function loadSortBy() {
    return { 
        type: types.LOAD_SORTBY_SUCCESS,
        sortBy 
    };
}