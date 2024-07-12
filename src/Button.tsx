// @flow 
import * as React from 'react';


type ButtonProps = {
    title: string,
    onClick: ()=>void,
    disabled: boolean,
    className: string
};
export const Button = ({title, onClick, disabled, className}: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {title}
        </button>
    );
};