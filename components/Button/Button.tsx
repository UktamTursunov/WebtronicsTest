import React from 'react';
import {ButtonTypes} from "./Button.types";
import styles from '../../styles/Button.module.scss'

export const Button = ({value, onClick, width, type}: ButtonTypes) => {
    return (
        <button
            style={{width: `${width}px`}}
            className={styles.button}
            onClick={onClick}
            type={type}
        >
            {value}
        </button>
    );
};