import { Link, useLocation } from 'react-router-dom'
import styles from './footer.module.scss'
import logoSVG from '../../icons/logo.svg'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { TfiTwitter } from 'react-icons/tfi'
import { SiVisa, SiMastercard } from 'react-icons/si'

export default function Footer() {

    const location = useLocation();

    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.main}>
                    <div className={styles.left_part}>
                        <Link to="/">
                            <div className={styles.logo}>
                                <img src={logoSVG} alt="Logo" />
                                <span>womazing</span>
                            </div>
                        </Link>
                        <div className={styles.privacy}>
                            <p>© All rights reserved</p>
                            <p>Privacy Policy</p>
                            <p>Public offer</p>
                        </div>
                    </div>

                    <section className={styles.menu}>
                        <div className={styles.menu_list}>
                            <Link to="/" className={location.pathname === '/' ? "link_active" : ""}>Main</Link>
                            <Link to="/shop/All" className={location.pathname.slice(0, 5) === '/shop' ? "link_active" : ""}>Shop</Link>
                            <Link to="/about_brand" className={location.pathname === '/about_brand' ? "link_active" : ""}>About brand</Link>
                            <Link to="/contacts" className={location.pathname === '/contacts' ? "link_active" : ""}>Contacts</Link>
                        </div>
                    </section>

                    <div className={styles.contacts}>
                        <div className={styles.call_back}>
                            <span><a href="tel:1-562-867-5309">951-358-8862</a></span>
                            <p><a href="mailto: hello@womazing.com">hello@womazing.com</a></p>
                        </div>
                        <div className={styles.social_network}>
                            <AiOutlineInstagram size={22} />
                            <AiOutlineFacebook size={22} />
                            <TfiTwitter size={22} />
                        </div>
                        <div className={styles.social_network}>
                            <SiVisa size={30} />
                            <SiMastercard size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}