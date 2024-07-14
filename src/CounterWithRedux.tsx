// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from './styles/Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducer/store";
import {CounterReducerPropsType, onClickInkAC, onClickResetAC} from "./reducer/Counter.reducer";
import {useCallback} from "react";
import {Error} from "./Error";
import {Warning} from "./Warning";



export type CounterPropsType = {
    maxValue: number,
    startValue: number,
};

export const CounterWithRedux = ({maxValue, startValue}: CounterPropsType) => {

    let counter = useSelector<AppRootStateType, CounterReducerPropsType>(state => state.counter)
    const dispatch = useDispatch()

    // const maxValue = useSelector((state:AppRootStateType) => state.counter.maxValueOption)
    // const startValue = useSelector((state:AppRootStateType) => state.counter.startValueOption)
    const isDisableError = maxValue < startValue
    const isDisableSetWarning = maxValue === startValue
    const isDisableSet = maxValue <= startValue

    const result = isDisableError ? <Error/> : (isDisableSetWarning ? <Warning/> : counter.count)
    const stylesResult = isDisableError ? s.errorContainer : (isDisableSetWarning ? s.warningContainer : s.container)


    const min = counter.startValueOption;
    const max = counter.maxValueOption;

    const isCounterMax = counter.count ===  max;
    const isCounterMin = counter.count === min;
    const onClickInk = () => {
        debugger
        if (counter.count < max) {
            dispatch(onClickInkAC());
        }
    }
    const onClickReset = () => {
        dispatch(onClickResetAC());
    }

    return (
        <div>
            <div className={s.containerImg}>
            </div>
            <div className={stylesResult}>
                <div className={isCounterMax ? s.countResultMax : s.containerCountResult}>{result}</div>
                <div className={s.buttonContainer}>
                    <Button title={"inc"} onClick={onClickInk} disabled={isCounterMax || isDisableSet}
                            className={isCounterMax || isDisableSet ? s.newButton : s.button}/>
                    <Button title={"reset"} onClick={onClickReset} disabled={isCounterMin || isDisableSet}
                            className={isCounterMin || isDisableSet ? s.newButton : s.button}/>
                </div>
            </div>
        </div>
    );
};

// counter.count