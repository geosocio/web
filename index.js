import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, replace } from 'react-router-redux';
// import App from './components/app';
// import reducer from './reducers/index';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
// import epic from './epics';
// import './styles/styles.scss';

function main() {
  // Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory();
  // Build the middleware for intercepting and dispatching navigation actions
  const router = routerMiddleware(history);
  const epicMiddleware = createEpicMiddleware(epic);
  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(router, epicMiddleware)),
  );

  const duh = 'what';

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <App /> */}
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

// Engage!
main();
