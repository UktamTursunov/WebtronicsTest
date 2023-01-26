import React from 'react';
import {ProgrammingCardTypes} from "./ProgrammingCard.types";
import styles from '../../../../styles/Main/ProgrammingCard.module.scss'
import {FourthTitle} from "../../../Titles/FourthTitle/FourthTitle";

export const ProgrammingCard = ({logo, name, logoName = 'logo'}: ProgrammingCardTypes) => {
    return (
        <div className={styles.programmingCard}>
            <img className={styles.cardImg} src={logo} alt={logoName}/>
            <FourthTitle>{name}</FourthTitle>
        </div>
    );
};