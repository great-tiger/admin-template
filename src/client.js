import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

ReactDOM.render(
  <AppContainer>
    <App />
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
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
