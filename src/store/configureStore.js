import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';

import reducers from '../reducers';

const middleware = routerMiddleware(browserHistory);
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, middleware)
);

export default function configureStore(initialState) {
    return createStore (
        reducers,
        initialState,
        enhancer
    );
}