import React from 'react';
import {FourthTitleTypes} from "./FourthTitle.types";
import styles from '../../../styles/Titles/FourthTitle.module.scss'

export const FourthTitle = ({children}: FourthTitleTypes) => {
    return (
        <h4 className={styles.fourthTitle}>
            {children}
        </h4>
    );
};