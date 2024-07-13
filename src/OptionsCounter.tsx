// @flow
import * as React from 'react';
import s from "./styles/OptionsCounter.module.css";
import {ChangeEvent, useEffect, useState} from "react";
import {Counter} from "./Counter";

type Props = {
};
const max = localStorage.getItem('maxCounter')
const start = localStorage.getItem('startCounter')
export const OptionsCounter = (props: Props) => {
    const min = 0;
    const step = 1;

    const [maxValueOption, setMaxValueOption] = useState(max ? JSON.parse(max) : min)
    const [startValueOption, setStartValueOption] = useState(start ? JSON.parse(start) : min)
    const[count, setCount] = useState(startValueOption)

    const maxValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxValueOption(+value)
    }
    const startValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStartValueOption(+value)
    }

    const result = () => {
        localStorage.setItem('maxCounter', JSON.stringify(maxValueOption))
        localStorage.setItem('startCounter', JSON.stringify(startValueOption))
        setCount(startValueOption)
    }
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div className={s.valueContainer}>
                    <div className={s.inputContainer}>
                        <div className={s.inputText}>max value:</div>
                        <input type={"number"} className={s.input} value={maxValueOption} onChange={maxValueChange}/>
                    </div>
                    <div className={s.inputContainer}>
                        <div className={s.inputText}>start value:</div>
                        <input type={"number"} className={s.input} value={startValueOption} onChange={startValueChange}/>
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <button className={s.button} onClick={result}>set</button>

                </div>
            </div>
            <Counter step={step} count={count} setCount={setCount} startValueOption={startValueOption} maxValueOption={maxValueOption}/>

        </div>

    );
};














