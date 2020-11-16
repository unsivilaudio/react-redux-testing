import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import localStorageSync from './middleware/localStorageSync';
import reducers from './reducers';

import '../style/main.scss';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(localStorageSync))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
