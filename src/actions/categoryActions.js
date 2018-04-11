import * as types from './actionTypes';

import categories from '../api/categories';

export function loadCategories() {
    return { 
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories 
    };
}