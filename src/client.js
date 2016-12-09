import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import Header from './components/Header';
import './styles/bootstrap.css';
import './styles/AdminLTE.css';
import './styles/skins/skin-blue.css';
import MainSidebar from './components/MainSidebar';
import ContentWrapper from './components/ContentWrapper';

ReactDOM.render(
  <AppContainer>
    <div className="skin-blue">
      <Header />
      <MainSidebar />
      <ContentWrapper />
    </div>
  </AppContainer>,
  document.getElementById('app')
);
if (module.hot) {
  console.log("module.hot",module.hot);
  module.hot.accept('./components/Header', () => {
    const NextApp = require('./components/Header').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
