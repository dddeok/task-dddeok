import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from './app/store';
import App from './App';
const GlobalStyle = createGlobalStyle`
html, body, #root, #root>div {
  height: 100%;
  margin: 0px;
}
`;

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
