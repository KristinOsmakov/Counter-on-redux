import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import s from './Counter.module.css'
import {OptionsCounter} from "./OptionsCounter";


function App() {
  return (
    <div className={s.divApp}>
        <OptionsCounter />
        {/*<Counter />*/}
    </div>
  );
}

export default App;
