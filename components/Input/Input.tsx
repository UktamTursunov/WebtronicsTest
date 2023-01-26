import React from 'react';
import styles from '../../styles/Inpur.module.scss'

export const Input = ({type, label, register, required , placeholder}: any) => {
    return (
        <input
            {...register(label, { required })}
            type={type}
            className={styles.customInput}
            placeholder={placeholder}
        />
    );
};