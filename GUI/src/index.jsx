import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { debugToWindow } from './utils/methods';
import { store } from './store/store';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

debugToWindow('store', store); // 用于调试redux store

root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <App />
    </Provider>
  </React.StrictMode>
);
