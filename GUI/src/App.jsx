import React from 'react';

import RegListenerHOC from './utils/hoc/register_listener';
import style from './App.css'

const AppComp = () => {
  return (
    <div className="App">
      测试APP
      <p className={style.text}>蓝字</p>
    </div>
  );
}

const App =  RegListenerHOC(AppComp);

export default App;