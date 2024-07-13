// @flow
import * as React from 'react';
import OCs from "./styles/OptionsCounter.module.css";
import s from './styles/Counter.module.css';
import {ChangeEvent, useEffect, useState} from "react";
import {Counter} from "./Counter";
import {CounterReducerPropsType, maxValueChangeAC, setValueAC, startValueChangeAC} from "./reducer/Counter.reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducer/store";
import {CounterWithRedux} from "./CounterWithRedux";
import {Input} from "./Input";
import {Button} from "./Button";

type Props = {
};

export const OptionsCounterWithRedux = (props: Props) => {

    let counter = useSelector<AppRootStateType, CounterReducerPropsType>(state => state.counter)
    const dispatch = useDispatch()


    const maxValue = useSelector((state:AppRootStateType) => state.counter.maxValueOption)
    const startValue = useSelector((state:AppRootStateType) => state.counter.startValueOption)
    const isDisableSet = maxValue <= startValue
    const startNegative = startValue < 0
    console.log(startNegative)


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
        <div className={OCs.root}>
            <div className={startNegative ? s.errorContainer : OCs.container}>
                <div className={OCs.valueContainer}>
                    <div className={OCs.inputContainer}>
                        <div className={OCs.inputText}>max value:</div>
                        <Input type={'number'} className={OCs.input} value={counter.maxValueOption} onChange={maxValueChange}/>
                    </div>
                    <div className={OCs.inputContainer}>
                        <div className={OCs.inputText}>start value:</div>
                        <Input type={'number'} className={OCs.input} value={counter.startValueOption} onChange={startValueChange}/>
                    </div>
                </div>
                <div className={OCs.buttonContainer}>
                    <Button title={'set'} onClick={result} disabled={isDisableSet} className={isDisableSet ? OCs.newButton : OCs.button}/>
                </div>
            </div>
            {/*<CounterWithRedux />*/}

        </div>

    );
};














