import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import ChatStore from './stores/ChatStore';

const chat = new ChatStore();

const renderApp = () => {
  render(
    <AppContainer>
      <App chat={chat} />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(() => renderApp());
}
