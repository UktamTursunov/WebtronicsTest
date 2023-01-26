import React from 'react';
import {LeftCardTypes} from "./LeftCard.types";
import styles from '../../../../styles/Main/LeftCard.module.scss';
import borderLeft from '../../../../public/main/leftGradient.png';
import borderRight from "../../../../public/main/rightGradient.png";
import {FourthTitle} from "../../../Titles/FourthTitle/FourthTitle";
import {ThirdTitle} from "../../../Titles/ThirdTitle/ThirdTitle";
import {ContentDescription} from "../../../ContentDescription/ContentDescription";

export const LeftCard = ({step, left, right, title}: LeftCardTypes) => {
    return (
       <>
           {left && (
               <div className={styles.blockWithGradient}>
                   <img className={styles.gradientBorder} src={borderLeft.src} alt='gradient'/>
                   <div className={styles.leftCardBlock}>
                       <FourthTitle>
                           <p>Step {step}</p>
                       </FourthTitle>
                       <ThirdTitle>{title}</ThirdTitle>
                       <ContentDescription width='408'>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </ContentDescription>
                   </div>
               </div>
           )}
           {right && (
               <div className={styles.blockWithGradientRight}>
                   <img className={styles.gradientBorderRight} src={borderRight.src} alt='gradient'/>
                   <div className={styles.leftCardBlockRight}>
                       <FourthTitle>
                           <p>Step {step}</p>
                       </FourthTitle>
                       <ThirdTitle>{title}</ThirdTitle>
                       <ContentDescription width='408'>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </ContentDescription>
                   </div>
               </div>
           )}
       </>
    );
};