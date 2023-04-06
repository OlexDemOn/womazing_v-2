import styles from './pop_up.module.scss'
import { IPopUp } from './pop_up.porps'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai';

export default function PopUp(props: IPopUp) {
    return (
        <motion.div className={styles.main} exit={{ opacity: 0 }}>
            <div className={styles.bg} onClick={() => props.setTrigger(false)}>
            </div>
            <form action="">
                <motion.div className={styles.main_container}
                    initial={{ y: '-200%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '200%' }}
                >
                    <div className={styles.close} onClick={() => props.setTrigger(false)}>
                        <AiOutlineClose />
                    </div>
                    <span className='title'>
                        Order a callback
                    </span>
                    <div className={'input_field'}>
                        <input type="text" required />
                        <span>Name</span>
                    </div>
                    <div className={'input_field'}>
                        <input type="email" required />
                        <span>E-mail</span>
                    </div>
                    <div className={'input_field'} >
                        <input type="text" required />
                        <span>Phone</span>
                    </div>
                    <button className='green_button'>Request a call</button>
                </motion.div>
            </form>
        </motion.div>
    )
}