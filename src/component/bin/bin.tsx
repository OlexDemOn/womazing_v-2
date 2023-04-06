import { Link } from 'react-router-dom'
import styles from './bin.module.scss'
import { useEffect, useState } from 'react'
import { IBuyItem } from '../buy_item/buy_item.props';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

export default function Bin() {

    let total = 0;
    const [data, setData] = useState<IBuyItem[]>([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("Item")!));
    }, [])

    function deleteItem(index: number) {
        data.splice(index, 1);
        localStorage.setItem('Item', JSON.stringify(data));
        window.dispatchEvent(new Event("storage"));
        setData([...data]);
    }

    data.map((el: IBuyItem) => total += el.price * el.quantity)

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2 className='big_title'>Bin</h2>
                <span><Link to='/'>Main</Link> - <Link to='/bin' className={styles.last_link}>Bin</Link></span>
            </div>

            <div className={styles.product_table}>
                <section className={styles.table_header}>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                </section>
                <section className={styles.table_body}>
                    <AnimatePresence mode={'sync'}>
                        {data ? data?.map((el: IBuyItem, index: number) =>
                            <motion.div className={styles.one_item} key={index}
                                layout
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ type: "spring" }}
                            >
                                <div className={styles.item_info}>
                                    <div onClick={() => deleteItem(index)} className={styles.delete_item}><AiOutlineClose /></div>
                                    <div className={styles.img}><img src={el.img} alt="" /></div>
                                    <span>{el.title}</span>
                                </div>
                                <div>${el.price}</div>
                                <div>{el.quantity}</div>
                                <div>${(el.price * el.quantity).toFixed(1)}</div>
                            </motion.div>
                        ) : <p>Bin is empty</p>
                        }
                    </AnimatePresence>
                </section>
                <section className={styles.manage_panel}>
                    <div className={styles.coupons}>
                        <div className={'input_field'} >
                            <input type="text" required />
                            <span>Enter the coupon</span>
                        </div>
                        <button className='button_border'>Apply coupon</button>

                    </div>
                    <button className='button_border'>Refresh bin</button>
                </section>
            </div>

            <div className={styles.buy_all}>
                <div className={styles.total}>
                    <span>Total:</span>
                    <span>${total && total}</span>

                </div>
                <Link to={'/checkout'}>
                    <button className='green_button'>Place an order</button>

                </Link>
            </div>
        </div>
    )
}