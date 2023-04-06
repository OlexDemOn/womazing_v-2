import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../cart_item/cart_item'
import styles from './home_collection.module.scss'
import { ICollection } from './home_collection.props'

export default function HomeCollection() {

    const [data, setData] = useState<ICollection[]>([])
    const [loading, setLoading] = useState<boolean>()


    useEffect(() => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products/?limit=3')
            .then(({ data }) => {
                setData(data)
                setLoading(false)
            })
            .catch((err: any) => console.dir(err))
            .finally(() => { })
    }, [])

    return (
        <div className={styles.main} id='home-collection'>
            <h1 className='big_title'>New collection</h1>
            <section className={styles.collection}>
                {data.map((el) =>
                    <CartItem key={el.id} {...el} />
                )}
            </section>
            <div className={styles.button_container}>
                <Link to="/shop/All">
                    <button className='button_border'>
                        Open shop
                    </button>
                </Link>
            </div>
        </div>
    )
}