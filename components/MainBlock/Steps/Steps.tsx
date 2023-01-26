import React from 'react';
import styles from '../../../styles/Main/Steps.module.scss'
import {LeftCard} from "./StepCards/LeftCard";
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {stepsCardsArray} from "../../../helper";
import lineWithArrows from '../../../public/main/lineWithArrows.png'

export const Steps = () => {
    return (
        <div id='Steps' className={styles.stepsBlock}>
            <SecondTitle>Steps</SecondTitle>
            <div className={styles.stepCardsBlock}>
                    <img className={styles.lineWithArrows} src={lineWithArrows.src} alt='lineWithArrows'/>
                    <div className={styles.leftCardsBlock}>
                        {stepsCardsArray.map((value, index) => (
                            <LeftCard step={index + 1} left={value.side === 'left'} title={value.title}/>
                        ))}
                    </div>
                    <div className={styles.rightCardsBlock}>
                        {stepsCardsArray.map((value, index) => (
                            <LeftCard step={index + 1} right={value.side === 'right'} title={value.title}/>
                        ))}
                    </div>
            </div>

        </div>
    );
};