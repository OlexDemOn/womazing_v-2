import styles from './cart_item.module.scss'
import { ICollection } from '../home_collection/home_collection.props'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function CartItem(props: any) {

    const variants = {
        hover: {

        },
        unhover: {

        }
    }
    const ITEM = {
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                type: "Tween"
            }
        },
        unhover: {
            opacity: 0,
            y: "-100%"
        }
    }

    return (
        <motion.div variants={variants} className={styles.item}
            initial="unhover"
            whileHover={"hover"}
        >
            <Link to={`/buyItem/${props.id}`}>
                <div className={styles.img_block}>
                    <img src={props.image} alt="cover" />
                    <motion.div className={styles.img_block_hover}
                        variants={ITEM}
                    >
                        <BsArrowRight size={40} />
                    </motion.div>
                </div>
                <section className={styles.text}>
                    <span>
                        {props.title}
                    </span>
                    <p>
                        {props.price}$
                    </p>
                </section>
            </Link>
        </motion.div>
    )
}