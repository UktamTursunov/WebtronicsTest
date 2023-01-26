import React from 'react';
import {ThirdTitleTypes} from "./ThirdTitle.types";
import styles from '../../../styles/Titles/ThirdTitle.module.scss'

export const ThirdTitle = ({children}: ThirdTitleTypes) => {
    return (
        <h3 className={styles.thirdTitle}>
            {children}
        </h3>
    );
};