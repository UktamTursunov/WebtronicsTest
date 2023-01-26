import React from 'react';
import styles from '../../../styles/Main/AboutUs.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {ThirdTitle} from "../../Titles/ThirdTitle/ThirdTitle";
import {ContentDescription} from "../../ContentDescription/ContentDescription";
import {MentorsCard} from "./MentorsCard/MentorsCard";
import kristinWatson from '../../../public/main/KristinWatson.png'
import wadeWarren from '../../../public/main/WadeWarren.png'
import robertFox from '../../../public/main/RobertFox.png'
import vectorLeft from '../../../public/main/vectorLeft.png'
import vectorCenter from '../../../public/main/vectorCenter.png'
import vectorRight from '../../../public/main/vectorRight.png'

export const AboutUs = () => {
    return (
        <div id="About">
            <SecondTitle>
                About us
            </SecondTitle>
            <div className={styles.aboutUsBlock}>
                <div className={styles.mentors}>
                    <ThirdTitle>
                        Mentors
                    </ThirdTitle>
                    <img className={styles.vectorLeft} src={vectorLeft.src} alt='left'/>
                    <img className={styles.vectorCenter} src={vectorCenter.src} alt='center'/>
                    <img className={styles.vectorRight} src={vectorRight.src} alt='right'/>
                    <MentorsCard top='170px' left='-25px' image={wadeWarren.src} name='Wade Warren'/>
                    <MentorsCard top='119px' left='188px' image={kristinWatson.src} name='Kristin Watson'/>
                    <MentorsCard right='-25px' top='170px' image={robertFox.src} name='Robert Fox'/>
                </div>
                <div className={styles.descriptionBlock}>
                    <ContentDescription width='468'>
                        Front-end engineers work closely with designers to make websites beautiful, functional,
                        and fast. This Career Path will teach you not only the necessary languages and technologies,
                        but how to think like a front-end engineer, too.
                    </ContentDescription>
                </div>
            </div>
        </div>
    );
};