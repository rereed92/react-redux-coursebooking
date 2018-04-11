import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';

import reducers from '../reducers';

const middleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
    return createStore (
        reducers,
        initialState,
        applyMiddleware(thunk, middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}