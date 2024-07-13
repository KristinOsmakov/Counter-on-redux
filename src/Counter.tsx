// @flow
import * as React from 'react';
import {Button} from "./Button";
import s from './styles/Counter.module.css';



export type CounterPropsType = {
    step: number
    startValueOption: number
    maxValueOption: number
    setCount: (count: number) => void
    count: number
};

export const Counter = ({step, startValueOption, maxValueOption, setCount, count}: CounterPropsType) => {
    const min = startValueOption;
    const max = maxValueOption;


    const isCounterMax = count ===  max;
    const isCounterMin = count === min;
    const onClickInk = () => {
        if (count < max) {
            setCount(count + step);
        }
    }
    const onClickReset = () => {
        setCount(min);
    }

    return (
        <div>
            <div className={s.containerImg}>
            </div>
            <div className={s.container}>
                <div className={isCounterMax ? s.countResultMax : s.containerCountResult}>{count}</div>
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

