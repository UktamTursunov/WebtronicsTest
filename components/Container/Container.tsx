import React from 'react';
import {ContainerTypes} from "./Container.types";
import styles from '../../styles/Container.module.scss'

export const Container = ({children}: ContainerTypes) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};