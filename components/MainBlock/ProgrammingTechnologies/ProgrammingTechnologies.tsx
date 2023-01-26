import React from 'react';
import styles from '../../../styles/Main/ProgrammingTechnologies.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {ProgrammingCard} from "./ProgrammingCard/ProgrammingCard";
import {programmingCardsArray} from "../../../helper";

export const ProgrammingTechnologies = () => {
    return (
        <div id='Programs' className={styles.programmingTechnologiesBlock}>
            <div className={styles.technologiesDescriptionBlock}>
                <SecondTitle>
                    Programming technologies
                </SecondTitle>
                <p className={styles.technologiesDescription}> By the end, you’ll have the portfolio
                    and interview skills <br/> you need to start your new career.</p>
            </div>
            <div className={styles.programmingCardsBlock}>
                {programmingCardsArray.map((value) => (
                    <ProgrammingCard name={value.name} logo={value.logo} logoName={value.logoName}/>
                ))}
            </div>
        </div>
    );
};