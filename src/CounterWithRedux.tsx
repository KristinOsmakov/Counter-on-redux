// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducer/store";
import {CounterReducerPropsType, onClickInkAC, onClickResetAC} from "./reducer/Counter.reducer";
import {useCallback} from "react";



export type CounterPropsType = {

};



export const CounterWithRedux = (propsType: CounterPropsType) => {

    let counter = useSelector<AppRootStateType, CounterReducerPropsType>(state => state.counter)
    const dispatch = useDispatch()


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
            <div className={s.container}>
                <div className={isCounterMax ? s.countResultMax : s.containerCountResult}>{counter.count}</div>
                <div className={s.buttonContainer}>
                    <Button title={"inc"} onClick={onClickInk} disabled={isCounterMax}
                            className={isCounterMax ? s.newButton : s.button}/>
                    <Button title={"reset"} onClick={onClickReset} disabled={isCounterMin}
                            className={isCounterMin ? s.newButton : s.button}/>
                </div>
            </div>
        </div>
    );
};

