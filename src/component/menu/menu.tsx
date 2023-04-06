import styles from './menu.module.scss'
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Menu() {

    const [openMenu, setOpenMenu] = useState(true);

    const location = useLocation();

    return (
        <nav className={openMenu ? styles.menu : styles.menu + ' ' + styles.menu_open}>
            <div className={openMenu ? styles.menu_list : styles.menu_list + ' ' + styles.menu_list_open}>
                <Link onClick={() => setOpenMenu(true)} to="/" className={location.pathname === '/' ? "link_active" : ""}>Main</Link>
                <Link onClick={() => setOpenMenu(true)} to="/shop/All" className={location.pathname.slice(0, 5) === '/shop' ? "link_active" : ""}>Shop</Link>
                <Link onClick={() => setOpenMenu(true)} to="/about_brand" className={location.pathname === '/about_brand' ? "link_active" : ""}>About brand</Link>
                <Link onClick={() => setOpenMenu(true)} to="/contacts" className={location.pathname === '/contacts' ? "link_active" : ""}>Contacts</Link>
            </div>

            <motion.div onClick={() => setOpenMenu(!openMenu)} className={styles.hamburger}
                animate={!openMenu ? { rotate: 360 } : { rotate: 0 }}
            >
                <motion.span
                    animate={!openMenu ? { rotate: 45, y: 7.5 } : { rotate: 0 }}
                ></motion.span>
                <motion.span
                    animate={!openMenu ? { display: "none" } : { display: "block" }}
                ></motion.span>
                <motion.span
                    animate={!openMenu ? { rotate: -45, y: -7.5 } : { rotate: 0 }}
                ></motion.span>
            </motion.div>
        </nav>
    )
}