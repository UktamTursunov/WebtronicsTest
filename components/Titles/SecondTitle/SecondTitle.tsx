import React from 'react';
import {SecondTitleTypes} from "./SecondTitle.types";
import styles from '../../../styles/Titles/SecondTitle.module.scss'

export const SecondTitle = ({children, width}: SecondTitleTypes) => {
    return (
        <h2 style={{width: `${width}`}} className={styles.secondTitle}>
            {children}
        </h2>
    );
};