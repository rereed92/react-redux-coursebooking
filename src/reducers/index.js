import { combineReducers } from 'redux';

import courses from './courseReducers';
import sort from './sortByReducers';

const reducers = combineReducers({
    courses,
    sort
});

export default reducers;