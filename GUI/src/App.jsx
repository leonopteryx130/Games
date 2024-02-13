import React from 'react';
import { Provider } from 'react-redux';

import RegListenerHOC from './utils/hoc/register_listener';
import { store } from './store/store';
import style from './App.css'

const AppComp = () => {
  return (
    <Provider store={store}>  
      <div className="App">
        测试APP
        <p className={style.text}>蓝字</p>
      </div>
    </Provider>
  );
}

const App =  RegListenerHOC(AppComp);

export default App;