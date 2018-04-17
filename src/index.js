import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import { loadCourses } from './actions/courseActions';
import { loadCategories } from './actions/categoryActions';
import { loadSortBy } from './actions/sortByActions';

const store = configureStore();
[loadCourses(), loadCategories()].forEach(store.dispatch);
// store.dispatch(loadCourses());
// store.dispatch(loadCategories());
// store.dispatch(loadSortBy());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app-root'));

registerServiceWorker();
