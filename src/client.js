import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import routes from './routers.js';
function todoApp(state={},type){
  return state;
}

let store = createStore(todoApp);


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={hashHistory}>
       {routes}
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
/*具体为什么这样写，没有具体追究，反正是这么写就可以实现热加载了，否则就是reload*/
//TODO 
if (module.hot) {
  console.log("module.hot",module.hot);
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
         <Provider store={store}>
           <Router history={hashHistory}>
               {routes}
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
if (module.hot) {
  console.log("module.hot",module.hot);
  module.hot.accept('./routers.js', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
         <Provider store={store}>
           <Router history={hashHistory}>
               {routes}
          </Router>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
