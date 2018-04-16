import { combineReducers } from 'redux';

import courses from './courseReducers';
import categories from './categoryReducers';
import sortOptions from './sortByReducers';

const reducers = combineReducers({
    courses,
    categories,
    sortOptions
});

export default reducers;