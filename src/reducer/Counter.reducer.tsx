// @flow
import * as React from 'react';
import {CounterPropsType} from "../Counter";


export type OnClickInkActionType = ReturnType<typeof onClickInkAC>
export type OnClickResetActionType = ReturnType<typeof onClickResetAC>
export type maxValueChangeActionType = ReturnType<typeof maxValueChangeAC>
export type startValueChangeActionType = ReturnType<typeof startValueChangeAC>
export type setValueActionType = ReturnType<typeof setValueAC>

export type ActionType = OnClickInkActionType
    | OnClickResetActionType
    | maxValueChangeActionType
    | startValueChangeActionType
    |setValueActionType


export type CounterReducerPropsType = {
    step: number
    startValueOption: number
    maxValueOption: number
    count: number
};

const initialState: CounterReducerPropsType = {
    step: 1,
    startValueOption: 0,
    maxValueOption: 10,
    count: 0,
};

export const CounterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ON-CLICK-INK":
            debugger
            return {
                ...state,
                count: state.count + state.step}
        case "ON-CLICK-RESET":
            return {
                ...state,
                count: state.startValueOption
            }
        case 'MAX-VALUE-CHANGE':
            return {...state,
                maxValueOption: action.payload}
        case 'START-VALUE-CHANGE':
            return {...state,
                startValueOption: action.payload}
        case 'SET-VALUE':
            return {...state,
                count: state.startValueOption
            }

        default: return state;
    }

};

export const onClickInkAC = () => {
    debugger
    return {
        type: 'ON-CLICK-INK',
    } as const
}
export const onClickResetAC = () => {
    return {
        type: 'ON-CLICK-RESET',
    } as const
}
export const maxValueChangeAC = (value: number) => {
    return {
        type: 'MAX-VALUE-CHANGE',
        payload: value
    } as const
}
export const startValueChangeAC = (value: number) => {
    return {
        type: 'START-VALUE-CHANGE',
        payload: value
    } as const
}
export const setValueAC = (value: number) => {
    return {
        type: 'SET-VALUE',
        payload: value
    } as const
}