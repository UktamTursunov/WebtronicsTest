import React from 'react';
import styles from '../../styles/Footer/Footer.module.scss'
import {Container} from "../Container/Container";
import logo from '../../public/header/logo.png'
import {ContentDescription} from "../ContentDescription/ContentDescription";
import facebook from '../../public/footer/facebook.png'
import twitter from '../../public/footer/twitter.png'
import fox from '../../public/footer/fox.png'
import linkedin from '../../public/footer/linkedin.png'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <Container>
                <div className={styles.mainBlock}>
                    <div className={styles.firstBlock}>
                        <img className={styles.footerLogo1} src={logo.src} alt='Logo'/>
                        <ContentDescription>
                            Wisconsin Ave, Suite 700
                            Chevy Chase, Maryland 20815
                        </ContentDescription>
                    </div>
                    <div className={styles.secondBlock}>
                        <h4 className={styles.secondBlockTitle}>Company</h4>
                        <div className={styles.secondBlockDescriptions}>
                            <ContentDescription>About Us</ContentDescription>
                            <ContentDescription>Steps</ContentDescription>
                            <ContentDescription>FAQs</ContentDescription>
                        </div>
                    </div>
                    <div className={styles.thirdBlock}>
                        <ContentDescription>Review</ContentDescription>
                        <ContentDescription>Gallery</ContentDescription>
                    </div>
                    <div className={styles.fourthBlock}>
                        <h4 className={styles.secondBlockTitle}>Social media</h4>
                        <div className={styles.logosBlock}>
                            <img src={facebook.src} alt='Facebook'/>
                            <img src={fox.src} alt='Fox'/>
                            <img src={twitter.src} alt='Twitter'/>
                            <img src={linkedin.src} alt='Linkedin'/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};