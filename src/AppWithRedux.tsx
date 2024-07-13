import React, {useCallback} from 'react';
import './App.css';
import {Counter} from "./Counter";
import s from './styles/Counter.module.css'
import {OptionsCounter} from "./OptionsCounter";
import App from "./App";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducer/store";
import {
    CounterReducerPropsType,
    maxValueChangeAC,
    onClickInkAC,
    onClickResetAC,
    startValueChangeAC
} from "./reducer/Counter.reducer";
import {OptionsCounterWithRedux} from "./OptionsCounterWithRedux";
import {CounterWithRedux} from "./CounterWithRedux";

function AppWithRedux() {

    return (
        <div className={s.divApp}>
            <OptionsCounterWithRedux />
            <CounterWithRedux />
            {/*<Counter step={} startValueOption={} maxValueOption={} setCount={} count={}*/}
        </div>
    );
}
export default AppWithRedux;
