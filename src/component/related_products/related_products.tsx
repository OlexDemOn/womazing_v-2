import styles from './related_products.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItem from '../cart_item/cart_item';
import { ICollection } from '../home_collection/home_collection.props';

interface IRelatedProducts {
    categories: string
}

export default function RelatedProducts({ categories }: IRelatedProducts) {
    const [data, setData] = useState<ICollection[]>();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${categories}?limit=3`)
            .then(({ data }) => {
                setData(data)
            })
            .catch((err: any) => console.dir(err))
            .finally(() => { })
    }, [])
    return (
        <div className={styles.main}>
            <h2 className='title'>Related Products</h2>
            <div className={styles.item_block}>
                {data && data.map((el) => <CartItem key={el.id} {...el} />)}

            </div>
        </div>
    )
}