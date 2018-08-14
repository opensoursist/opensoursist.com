import * as React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware, ConnectedRouter, RouterState } from 'react-router-redux';

import reducers from './reducers';
import App from './components/App';

export type RootState = {
    [K in keyof typeof reducers]?: ReturnType<typeof reducers[K]>;
} & {
    router: RouterState;
};

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            thunk,
            historyMiddleware
        )
    )
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
, document.getElementById('app'));