import React from 'react';
import styles from '../../styles/Header/Header.module.scss'
import logo from '../../public/header/logo.png'
import {Container} from "../Container/Container";

export const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <Container>
                <div className={styles.header}>
                    <div>
                        <img className={styles.headerLogo} src={logo.src} alt="Webtronics_Logo"/>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.link} href={"#About"}>About</a>
                        <a className={styles.link} href={"#Programs"}>Programs</a>
                        <a className={styles.link} href={'#Steps'}>Steps</a>
                        <a className={styles.link} href={'#Questions'}>Questions</a>
                        <a className={styles.link} href={'#GetInTouch'}>Get in touch</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};