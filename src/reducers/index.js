import { combineReducers } from 'redux';

import courses from './courseReducers';
import categories from './categoryReducers';
import sortBy from './sortByReducers';

const reducers = combineReducers({
    courses,
    categories,
    sortBy
});

export default reducers;