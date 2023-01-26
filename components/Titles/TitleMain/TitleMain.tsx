import React from 'react';
import {TitleMainTypes} from "./TitleMain.types";
import styles from '../../../styles/Titles/TitleMain.module.scss'

export const TitleMain = ({children}: TitleMainTypes) => {
    return (
        <h2 className={styles.contentTitle}>
            {children}
        </h2>
    );
};