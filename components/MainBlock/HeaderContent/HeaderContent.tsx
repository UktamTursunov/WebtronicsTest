import React from 'react';
import styles from '../../../styles/Main/HeaderContent.module.scss'
import {ContentDescription} from "../../ContentDescription/ContentDescription";
import {TitleMain} from "../../Titles/TitleMain/TitleMain";
import {Button} from "../../Button/Button";
import {ThirdTitle} from "../../Titles/ThirdTitle/ThirdTitle";

export const HeaderContent = () => {
    return (
        <div>
            <div className={styles.headerContentBlock}>
                <div className={styles.headerContentBlockTop}>
                    <TitleMain>
                        Front-End
                    </TitleMain>
                    <ContentDescription width='359'>
                        Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                    </ContentDescription>
                </div>
                <div className={styles.headerContentBlockCenter}>
                    <Button
                        value='Start my career change'
                        onClick={() => console.log(123)}
                        width='288'/>
                    <TitleMain>
                        Developer
                    </TitleMain>
                </div>
                <div className={styles.headerContentBlockBottom}>
                    <ThirdTitle>
                        Courses
                    </ThirdTitle>
                </div>
            </div>
        </div>
    );
};