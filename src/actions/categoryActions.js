import * as types from './actionTypes';

import categories from '../data/categories';

export function loadCategories() {
    return { 
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories 
    };
}