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
    const maxValue = useSelector((state:AppRootStateType) => state.counter.maxValueOption)
    const startValue = useSelector((state:AppRootStateType) => state.counter.startValueOption)

    //если не нажат SET - disable INC и RESET
    //если нажат SET - disable SET

    return (
        <div className={s.divApp}>
            <OptionsCounterWithRedux maxValue={maxValue} startValue={startValue}/>
            <CounterWithRedux maxValue={maxValue} startValue={startValue}/>
            {/*<Counter step={} startValueOption={} maxValueOption={} setCount={} count={}*/}
        </div>
    );
}
export default AppWithRedux;
