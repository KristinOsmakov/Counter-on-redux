// @flow
import * as React from 'react';
import s from './styles/Counter.module.css'

type Props = {

};
export const Warning = (props: Props) => {
    return (
        <div className={s.warningCount}>
            Warning
        </div>
    );
};