import React from 'react';

import RegListenerHOC from './utils/hoc/register_listener';
import './App.scss'

const AppComp = () => {
  return (
    <div className="App">
      测试APP
    </div>
  );
}

const App =  RegListenerHOC(AppComp);

export default App;