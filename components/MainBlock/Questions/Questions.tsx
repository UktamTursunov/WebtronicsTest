import React, {SetStateAction} from 'react';
import styles from '../../../styles/Main/Questions.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {ContentDescription} from "../../ContentDescription/ContentDescription";
import questionLogo from '../../../public/main/questionLogo.png'
import {QuestionAccordion} from "./QuestionsAccordion/QuestionAccordion";
import {accordionArray} from "../../../helper";

export const Questions = () => {
    const handleAccordionClick = (setOpenAccordion: any) => {
        setOpenAccordion((prevState: SetStateAction<boolean>) => !prevState)
    }

    return (
        <div id='Questions' className={styles.questionsBlock}>
            <SecondTitle><p>Frequently Asked <br/>Questions</p></SecondTitle>
            <div className={styles.centerBlock}>
                <div className={styles.leftSideBlock}>
                    <ContentDescription width='280'>
                        Do you have any kind of questions? We are here to help.
                    </ContentDescription>
                    <img className={styles.questionLogo} src={questionLogo.src} alt='Question'/>
                </div>
                <div className={styles.rightSideBlock}>
                    {accordionArray.map((value, idx) => (
                        <QuestionAccordion
                            key={idx}
                            title={value.title}
                            description={value.description}
                            onClick={handleAccordionClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


