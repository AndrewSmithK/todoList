import React from 'react';
import { render }from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import todoApp from "./reducers/reducers";
import TodoApp from "./components/TodoApp";
import Hello from "./components/Hello";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


const store = createStore(
    combineReducers({
        todoApp,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/(:filter)" component={TodoApp} />
                <Route path="/hello" component={Hello}/>
            </Router>
        </Provider>,
    document.getElementById("app")
);
