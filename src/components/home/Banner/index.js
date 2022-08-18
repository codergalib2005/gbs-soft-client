import React, { useEffect, useState } from 'react';
import styles from './banner.module.css';
import { images } from '../../../fakeData/banner';

const Banner = () => {
    const [slider, setSlider] = useState([...images]);
    const [index, setIndex] = useState(0);
    const lastIndex = slider.length - 1;
    useEffect(() => {
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, lastIndex]);
    useEffect(() => {
        let slide = setInterval(() => {
            setIndex(index + 1)
        }, 2000)
        return (() => {
            clearInterval(slide)
        })
    }, [index])
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <div className={styles.wrapper + " no-select"}>
                    <div className={styles.left}>
                        <h3>

                            The best education <br />with
                            <br />
                            Counseling & Life Coaching
                        </h3>
                        <h1>GBS <span>soft</span> <div>Kid's Arena</div></h1>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.slide_wrapper}>
                            {
                                slider.map((item, slideIndex) => {
                                    const { image } = item;
                                    let position = `${styles.nextSlide}`;
                                    if (slideIndex === index) {
                                        position = `${styles.activeSlide}`
                                    }
                                    if (slideIndex === index - 1 || (index === 0 && slideIndex === slider.length - 1)) {
                                        position = `${styles.lastSlide}`;
                                    }
                                    return (
                                        <article className={position} key={slideIndex}>
                                            <img src={image} alt={image} />
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;