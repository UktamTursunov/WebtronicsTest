import React from 'react';
import {ContentDescriptionTypes} from "./ContentDescription.types";
import styles from '../../styles/ContentDescription.module.scss'

export const ContentDescription = ({children, width}: ContentDescriptionTypes) => {
    return (
       <p style={{width: `${width}px`}} className={styles.contentDescription}>{children}</p>
    );
};