// @flow
import * as React from 'react';
import s from "./styles/OptionsCounter.module.css";
import {ChangeEvent} from "react";

type InputPropsType = {
    type: string,
    className: string,
    value: number,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
};
export const Input = ({type, className, value, onChange}: InputPropsType) => {
    return (
        <input type={type} className={className} value={value} onChange={onChange}/>
    );
};