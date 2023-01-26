import React from 'react';
import {MentorsCardTypes} from "./MentorsCard.types";
import styles from '../../../../styles/Main/MentorsCard.module.scss'
import {FourthTitle} from "../../../Titles/FourthTitle/FourthTitle";
import {ContentDescription} from "../../../ContentDescription/ContentDescription";

export const MentorsCard = ({image, name, left, right, top, bottom}: MentorsCardTypes) => {
    return (
        <div
            style={{left: `${left}`, right: `${right}`, top: `${top}`, bottom: `${bottom}`}}
            className={styles.mentorsCard}>
            <div className={styles.imageBlock}>
                <img className={styles.cardImage} src={image}/>
            </div>
            <div className={styles.cardDescription}>
                <FourthTitle>
                    {name}
                </FourthTitle>
                <ContentDescription width='185'>
                    Front-end engineers work closely with designers
                </ContentDescription>
            </div>
        </div>
    );
};