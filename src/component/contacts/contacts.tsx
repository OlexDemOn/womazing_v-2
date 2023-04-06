import { Link } from 'react-router-dom'
import styles from './contacts.module.scss'
export default function Contacts() {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2 className='big_title'>Contacts</h2>
                <span><Link to='/'>Main</Link> - <Link to='/contacts' className={styles.last_link}>Contacts</Link></span>
            </div>

            <div className={styles.map}>
                map point
            </div>

            <section className={styles.contants}>
                <div className={styles.info_block}>
                    <span>Number</span>
                    <span>951-358-8862</span>
                </div>
                <div className={styles.info_block}>
                    <span>E-mail</span>
                    <span>info@sitename.com</span>
                </div>
                <div className={styles.info_block}>
                    <span>Address</span>
                    <span>Random address</span>
                </div>

            </section>
        </div>
    )
}