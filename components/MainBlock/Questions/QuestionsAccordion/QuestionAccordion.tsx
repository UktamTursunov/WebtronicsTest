import React, {useState} from 'react';
import styles from '../../../../styles/Main/QuestionAccordin.module.scss'
import {QuestionAccordionTypes} from "./QuestionAccordion.types";
import {FourthTitle} from "../../../Titles/FourthTitle/FourthTitle";
import {ContentDescription} from "../../../ContentDescription/ContentDescription";
import minus from '../../../../public/main/minus.png'
import plus from '../../../../public/main/plus.png'

export const QuestionAccordion = ({onClick, title, description}: QuestionAccordionTypes) => {

    const [openAccordion, setOpenAccordion] = useState<boolean>(false)

    return (
        <div className={styles.accordionBlock}>
            <FourthTitle>{title}</FourthTitle>
            {openAccordion && (
                <ContentDescription>{description}</ContentDescription>
            )}
            {openAccordion ? (
                <button onClick={() => onClick(setOpenAccordion)} className={styles.accordionBtn}>
                    <img src={minus.src} alt='Open'/>
                </button>
            ) : (
                <button onClick={() => onClick(setOpenAccordion)} className={styles.accordionCLoseBtn}>
                    <img src={plus.src} alt='Open'/>
                </button>
            )}
        </div>
    );
};