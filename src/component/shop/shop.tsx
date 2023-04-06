import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartItem from '../cart_item/cart_item'
import styles from './shop.module.scss'

export default function Shop() {

    const [categories, setCategories] = useState<string[]>([])
    const [data, setData] = useState([])
    const [pagination, setPagination] = useState<number>(1);


    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(function (response: any) {
                setCategories(['All']);
                setCategories((current) => [...current, ...response.data]);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const location = useLocation();

    const category = location.pathname === "/shop/All" ? "/" : `/category${location.pathname.slice(5)}`;

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products${category}`);
                setData(response.data);
                setPagination(1);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, [category])

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2 className='big_title'>Shop</h2>
                <span><Link to='/'>Main</Link> - <Link to='/shop/All' className={styles.last_link}>Shop</Link></span>
            </div>
            <div className={styles.sorting_buttons}>
                {categories.map((el: string) =>
                    <Link key={el} to={`/shop/${el}`}>
                        <button className={location.pathname.slice(6) === el ? styles.active : ''}>{el}</button>
                    </Link>
                )}
            </div>
            <div className={styles.item_count}>
                Showing results: {data.length > pagination * 9 ?
                    pagination * 9 - (pagination - 1) * 9 :
                    data.length - (pagination - 1) * 9

                } of {data.length} products
            </div>
            <div className={styles.shop_items}>
                {data && data.map((el: any, index: number) =>
                    index >= (pagination - 1) * 9 && index < pagination * 9 &&
                    <CartItem key={index} {...el}></CartItem>
                )}
            </div>
            <div className={styles.item_count}>
                Showing results: {data.length > pagination * 9 ?
                    pagination * 9 - (pagination - 1) * 9 :
                    data.length - (pagination - 1) * 9
                } of {data.length} products
            </div>
            <div className={styles.pagination_block}>
                {data &&
                    [...Array(Math.ceil(data.length / 9))].map((el, index) =>
                        <div
                            onClick={() => setPagination(index + 1)}
                            className={index === pagination - 1 ? styles.pagination_item + ' ' + styles.pagination_item_active : styles.pagination_item}
                            key={index}
                        >{index + 1}</div>
                    )
                }
            </div>
        </div>
    )
}