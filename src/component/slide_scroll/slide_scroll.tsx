import styles from './slide_scroll.module.scss'
import { motion } from 'framer-motion';
import { ISlide_scroll } from './slide_scroll.porps';

export default function SlideScroll(props: ISlide_scroll) {

    const setActiveSlide = props.setActiveSlide;
    const activeSlide = props.activeSlide;

    const ActivateSlide = (current: number, index: number) => {
        current = index;
        setActiveSlide(current);
        clearInterval(slide);
    }

    const slide = setInterval(() => {
        let tmp = activeSlide;
        tmp++;
        if (tmp === 3) {
            tmp = 0
        }
        setActiveSlide(tmp);
        clearInterval(slide);
    }, 12000)

    return (
        <div className={styles.slide_scroll}>
            {[0, 1, 2].map((el: number) =>
                <motion.div
                    key={el}
                    onClick={() => ActivateSlide(activeSlide, el)}
                    initial={{ background: "#D1D1D1" }}
                    animate={el === activeSlide ? { background: "#000000" } : { background: "#D1D1D1" }}
                ></motion.div>
            )}
        </div>
    )
}