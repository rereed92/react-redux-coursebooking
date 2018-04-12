import * as types from './actionTypes';

import categoryApi from '../api/categories';

export function loadCategories() {
    return function(dispatch) {
        return categoryApi.getCategories()
            .then(categories => {
                dispatch(loadCategoriesSuccess(categories));
            }).catch(error => {
                throw(error);
            });
    };
}

export function loadCategoriesSuccess(categories) {
    return { 
        type: types.LOAD_CATEGORIES_SUCCESS,
        categories 
    };
}