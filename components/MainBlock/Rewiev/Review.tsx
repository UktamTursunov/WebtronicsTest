import React from 'react';
import styles from '../../../styles/Main/Rewiew.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {ReviewCarousel} from "../../Carousel/Carousel";

export const Review = () => {
    return (
        <div className={styles.reviewBlock}>
            <SecondTitle>Review</SecondTitle>
            <ReviewCarousel />
        </div>
    );
};