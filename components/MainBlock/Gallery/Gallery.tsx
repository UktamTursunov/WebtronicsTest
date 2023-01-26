import React from 'react';
import styles from '../../../styles/Main/Gallery.module.scss'
import {SecondTitle} from "../../Titles/SecondTitle/SecondTitle";
import {ContentDescription} from "../../ContentDescription/ContentDescription";
import developer1 from '../../../public/main/developer1.png'
import developer2 from '../../../public/main/developer2.png'
import developer3 from '../../../public/main/developer3.png'
import developer4 from '../../../public/main/developer4.png'

export const Gallery = () => {
    return (
        <div className={styles.galleryBlock}>
            <SecondTitle>Gallery</SecondTitle>
            <div className={styles.mainBlock}>
                <div className={styles.leftSideBlock}>
                    <ContentDescription>
                        By the end of this course, you will be able to develop and publish your very
                        own Google Chrome extension! In this course we will focus on coding exercises and projects.
                    </ContentDescription>
                    <img className={styles.leftImage} src={developer1.src}/>
                </div>
                <div className={styles.rightSideBlock}>
                    <div className={styles.rightSideImageBlock2}>
                        <img className={styles.developer2img} src={developer2.src}/>
                        <div className={styles.rightSideImageBlock}>
                            <img className={styles.developer3img} src={developer3.src}/>
                            <img className={styles.developer3img} src={developer4.src}/>
                        </div>
                    </div>
                    <ContentDescription width='800'>
                        If you would like to learn web development and get a job in the tech industry,
                        you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with
                        over 15 hours of HD video tutorials! This course was designed to
                        be extremely beginner friendly. We will begin with the very basics of HTML
                        and build a simple web page.
                    </ContentDescription>
                </div>
            </div>
        </div>
    );
};