import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../styles/Carousel.module.scss'
import {FourthTitle} from "../Titles/FourthTitle/FourthTitle";
import {ContentDescription} from "../ContentDescription/ContentDescription";
import {carouselData} from "../../helper";

export const ReviewCarousel = () => {
    type CarouselAsd = typeof carouselData

    const [carousel, setCarousel] = useState<CarouselAsd>(carouselData)
    const [currentImage, setCurrentImage] = useState(1)

    const nextImage = () => {
        const list = [...carousel]
        list.push(list.shift()!)
        setCarousel([...list])
        setCurrentImage((currentImage + 1) > 3 ? 1 : currentImage + 1)
    }

    const prevImage = () => {
        const list = [...carousel]
        list.unshift(list.pop()!)
        setCarousel([...list])
        setCurrentImage((currentImage - 1) < 1 ? 3 : currentImage - 1)
    }

    return (
        <div className={styles.carouselBlock}>
            <div className={styles.carouselContent}>
                <FourthTitle>{carousel[0].title}</FourthTitle>
                <ContentDescription>{carousel[0].description}</ContentDescription>
            </div>
            <div className={styles.slidersBlock}>
                <div className={styles.prevNextButtons}>
                    <p>{currentImage}/<span>{carousel.length}</span></p>
                    <div className={styles.buttonsBlock}>
                        <div className={styles.buttonBackground}>
                            <button onClick={prevImage}>&lt;</button> {/* > */}
                        </div>
                        <div className={styles.buttonBackground}>
                            <button onClick={nextImage}>&gt;</button> {/* < */}
                        </div>
                    </div>
                </div>

                <div className={styles.carousel}>
                    {carousel.map(({ id, title, image }, index) => (
                        <div key={id}>
                            {index === 0 ? (
                                <img src={image} alt={title} />
                            ) : (
                                <img style={{width: 185, height: 425}} src={image} alt={title} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};