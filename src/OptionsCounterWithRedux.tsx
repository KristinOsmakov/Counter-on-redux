// @flow
import * as React from 'react';
import s from "./OptionsCounter.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import {Counter} from "./Counter";
import {CounterReducerPropsType, maxValueChangeAC, setValueAC, startValueChangeAC} from "./reducer/Counter.reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducer/store";
import {CounterWithRedux} from "./CounterWithRedux";

type Props = {
};

export const OptionsCounterWithRedux = (props: Props) => {

    let counter = useSelector<AppRootStateType, CounterReducerPropsType>(state => state.counter)
    const dispatch = useDispatch()

    const maxValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(maxValueChangeAC(+value))
    }
    const startValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(startValueChangeAC(+value))
    }

    const result = () => {
        dispatch(setValueAC(counter.startValueOption))
    }
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.valueContainer}>
                    <div className={s.inputContainer}>
                        <div className={s.inputText}>max value:</div>
                        <input type={"number"} className={s.input} value={counter.maxValueOption} onChange={maxValueChange}/>
                    </div>
                    <div className={s.inputContainer}>
                        <div className={s.inputText}>start value:</div>
                        <input type={"number"} className={s.input} value={counter.startValueOption} onChange={startValueChange}/>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <button className={s.button} onClick={result}>set</button>
                </div>
            </div>
            {/*<CounterWithRedux />*/}

        </div>

    );
};














