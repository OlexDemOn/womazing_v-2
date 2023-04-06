import { Link } from 'react-router-dom';
import styles from './checkout.module.scss'

export default function Checkout() {

    return (
        <div className={styles.main}>

            <div className={styles.title}>
                <h2 className='big_title'>Order placement</h2>
                <span><Link to='/'>Main</Link> - <Link to='/checkout' className={styles.last_link}>Chekout</Link></span>
            </div>

        </div>
    )
}