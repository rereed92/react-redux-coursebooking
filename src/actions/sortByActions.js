import * as types from './actionTypes';

import sortBy from '../data/sortBy';

export function loadSortBy() {
    return { 
        type: types.LOAD_SORTBY_SUCCESS,
        sortBy 
    };
}