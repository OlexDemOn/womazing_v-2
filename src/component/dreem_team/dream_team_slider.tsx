import { useState } from 'react';
import styles from './dreem_team.module.scss'
import { motion, AnimatePresence } from "framer-motion";
import { images } from "./image-data";
import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'

export default function DreamTeamSlider() {

    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const [[page, direction], setPage] = useState([0, 0]);
    const [index, setIndex] = useState(0);

    function paginate(swipe: number) {
        let newDirection = 1;
        if (swipe < -swipeConfidenceThreshold) {
            setIndex((prev) => images.length - 1 !== prev ? prev += 1 : prev = 0);
            newDirection = 1;
        }
        else {
            setIndex((prev) => prev === 0 ? prev = images.length - 1 : prev -= 1);
            newDirection = -1;
        }
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={styles.slider}>
            <div className={styles.slider_img}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[index]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            paginate(swipe);
                        }}
                    />
                </AnimatePresence>
            </div>
            <div className={styles.button_slider + ' ' + styles.button_slider_left}
                onClick={() => paginate(15000)}
            ><BsArrowLeft /></div>
            <div className={styles.button_slider + ' ' + styles.button_slider_right}
                onClick={() => paginate(-15000)}
            ><BsArrowRight /></div>
        </div>
    )
}