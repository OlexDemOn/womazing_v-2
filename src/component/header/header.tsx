import styles from './header.module.scss'
import logoSVG from '../../icons/logo.svg'
import phoneSVG from '../../icons/phone.svg'
import binSVG from '../../icons/bin.svg'
import Menu from '../menu/menu'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PopUp from '../pop_up/pop_up'
import { AnimatePresence } from 'framer-motion'
import { json } from 'stream/consumers'

export default function Header() {

    const [sticky, setSticky] = useState<string>(``);
    const [popUp, setPopUp] = useState<boolean>(false);
    const [binContent, setBinContent] = useState<number>(0);

    useEffect(() => {
        document.body.addEventListener("scroll", handleScroll);
        setBinContent(JSON.parse(localStorage.getItem('Item')!)?.length)
        window.addEventListener("storage", function () {
            setBinContent(JSON.parse(localStorage.getItem('Item')!)?.length)
        }, false);
        return () => {
            document.body.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const handleScroll = ({ target }: any) => {
        setSticky(target.scrollTop >= 100 ? styles.header_stick : '');
    }



    return (
        <div className={styles.header + ` ${sticky}`}>
            <div className='container'>
                <div className={styles.main}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <img src={logoSVG} alt="Logo" />
                            <span>womazing</span>
                        </div>
                    </Link>
                    <Menu />

                    <div className={styles.call_back}>
                        <img onClick={() => setPopUp(true)} src={phoneSVG} alt="Phone" />
                        <span><a href="tel:1-562-867-5309">951-358-8862</a></span>
                    </div>
                    <div className={styles.bin}>
                        <Link to="/bin">
                            <img src={binSVG} alt="Bin" />
                        </Link>
                        {binContent > 0 && <span className={styles.bin_content}>{binContent}</span>}
                    </div>

                </div>
            </div>
            <AnimatePresence>
                {popUp && <PopUp trigger={popUp} setTrigger={setPopUp}></PopUp>}
            </AnimatePresence>
        </div>
    )
}