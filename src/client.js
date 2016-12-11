import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import ProjectList from './components/ProjectList/ProjectList.js';
import NoticeList from './components/NoticeList/NoticeList.js';
import Home from './components/Home/Home.js';

import {Router,Route,hashHistory,IndexRoute} from 'react-router';
ReactDOM.render(
  <AppContainer>
    <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/pl" component={ProjectList}/>
          <Route path="/nl" component={NoticeList}/>
        </Route>
    </Router>
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
         <Router history={hashHistory}>
            <Route path="/" component={App} >
              <IndexRoute component={Home} />
              <Route path="/pl" component={ProjectList}/>
              <Route path="/nl" component={NoticeList}/>
            </Route>
        </Router>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
