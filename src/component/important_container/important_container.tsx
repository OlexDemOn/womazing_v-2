import styles from './important_container.module.scss';
import { BsPatchCheck } from 'react-icons/bs'
import { SlSettings } from 'react-icons/sl'
import { FaRegHandPaper } from 'react-icons/fa'

export default function ImportantContainer() {
    return (
        <div className={styles.main}>
            <h1 className='big_title'>
                What's important to us
            </h1>
            <section className={styles.cart_container}>
                <div className={styles.cart}>
                    <div className={styles.logo}>
                        <BsPatchCheck size={60} />
                    </div>
                    <h2 className='title'>
                        Quality
                    </h2>
                    <div className={styles.cart_text}>
                        Our professionals work on the best equipment for sewing clothes of unprecedented quality
                    </div>
                </div>

                <div className={styles.cart}>
                    <div className={styles.logo}>
                        <SlSettings size={60} />
                    </div>
                    <h2 className='title'>
                        Speed
                    </h2>
                    <div className={styles.cart_text}>
                        Thanks to the well-established system at Womazing, we can sew up to 20 products in our own workshops
                    </div>
                </div>

                <div className={styles.cart}>
                    <div className={styles.logo}>
                        <FaRegHandPaper size={60} />
                    </div>
                    <h2 className='title'>
                        Responsibilities
                    </h2>
                    <div className={styles.cart_text}>
                        We care about people and the planet. Waste-free production and comfortable working conditions - that's all Womazing
                    </div>
                </div>
            </section>
        </div>
    )
}