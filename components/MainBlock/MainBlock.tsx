import React from 'react';
import {Container} from "../Container/Container";
import {AboutUs} from "./AboutUs/AboutUs";
import {ProgrammingTechnologies} from "./ProgrammingTechnologies/ProgrammingTechnologies";
import {Steps} from "./Steps/Steps";
import {Questions} from "./Questions/Questions";
import {Review} from "./Rewiev/Review";
import {Gallery} from "./Gallery/Gallery";
import {ContactUs} from "./ContactUs/ContactUs";
import {HeaderContent} from "./HeaderContent/HeaderContent";

export const MainBlock = () => {
    return (
        <div>
            <Container>
                <>
                    <HeaderContent/>
                    <AboutUs/>
                    <ProgrammingTechnologies/>
                    <Steps/>
                    <Questions/>
                    <Review/>
                    <Gallery/>
                    <ContactUs/>
                </>
            </Container>
        </div>
    );
};