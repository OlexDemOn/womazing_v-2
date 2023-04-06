import { useState } from 'react';
import styles from './home_first_part.module.scss';
import main_1 from '../../images/main_1.png';
import main_2 from '../../images/main_2.png';
import main_3 from '../../images/main_3.png';
import { Link } from "react-router-dom";
import arrowSVG from '../../icons/arrow.svg';
import SlideScroll from '../slide_scroll/slide_scroll';
import { motion } from 'framer-motion';

export default function HomeFirstPart() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [slideText, setSlideText] = useState([
        [
            "New arrival",
            "this season",
            "Refined combinations and velvet shades - that's what you've been looking for this season. Time to explore."
        ],
        [
            "Turn on the new",
            "season with WOMAZING",
            "We have updated the assortment - legendary collections and novelties from domestic designers"
        ],
        [
            "Something new. We've been waiting for you",
            "",
            "Tired of looking for yourself in a gray city? It's time for new ideas, fresh colors and inspiration with Womazing!"
        ],

    ])


    return (
        <div className={styles.first_part}>
            <div className={styles.left_part}>
                {slideText.map((el: string[], index: number) =>
                    index === activeSlide &&
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    >
                        <h1 className='big_title'>
                            {slideText[activeSlide][0]}<br />{slideText[activeSlide][1]}
                        </h1>
                        <p>{slideText[activeSlide][2]}</p>
                    </motion.div>
                )}

                <div className={styles.buttons}>
                    <a href="#home-collection">
                        <button className={styles.arrow_button}>
                            <img src={arrowSVG} alt="Logo" />
                        </button>
                    </a>
                    <Link to="/shop/All">
                        <button className='green_button'>Open shop</button>
                    </Link>
                </div>
                <SlideScroll setActiveSlide={setActiveSlide} activeSlide={activeSlide} />
            </div>
            <div className={styles.image_block}>
                <img src={main_1} alt="Main" />;
                <img src={main_2} alt="Main" />;
                <img src={main_3} alt="Main" />;
            </div>
            <section className={styles.rigth_part_bg}>
            </section>
        </div>
    )
}