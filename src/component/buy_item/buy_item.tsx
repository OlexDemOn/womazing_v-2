import styles from './buy_item.module.scss'
import { ICollection } from '../home_collection/home_collection.props'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import RelatedProducts from '../related_products/related_products';
import { IBuyItem } from './buy_item.props';

export default function BuyItem() {

    const [data, setData] = useState<ICollection>();
    const [counter, setCounter] = useState<number>(1);

    const location = useLocation();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${location.pathname.slice(9)}`)
            .then(res => res.json())
            .then((json: ICollection) => setData(json))
    }, [location]);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        var properties: IBuyItem = {} as IBuyItem;
        properties.img = data?.image!;
        properties.title = data?.title!;
        properties.price = data?.price!;
        properties.color = document.querySelectorAll('input:checked')[1]?.id;
        properties.size = document.querySelectorAll('input:checked')[0]?.id;
        properties.quantity = counter;

        var currentElements: IBuyItem[] = [];
        currentElements = (JSON.parse(localStorage.getItem('Item')!))
        if (currentElements === null) {
            currentElements = []
        }
        let checkSame = true;
        let index: number = 0;
        currentElements.forEach((el: IBuyItem, currentIndex: number) => {
            if (el.title !== properties.title
                // el.color !== properties.color ||
                // el.size !== properties.size
            ) {
            }
            else {
                checkSame = false;
                index = currentIndex;
                return
            }
        })

        checkSame ? currentElements.push(properties) : currentElements[index].quantity += properties.quantity;
        localStorage.setItem('Item', JSON.stringify(currentElements));
        window.dispatchEvent(new Event("storage"));
    }

    return (
        <div className={styles.main}>
            {data &&
                <>
                    <span className='big_title'>{data.title}</span>
                    <div className={styles.title}>
                        <Link to='/'>Main</Link> -
                        <Link to={`/shop/${data.category}`} className={styles.last_link}> {data.category}</Link> -
                        <span> {data.title}</span>
                    </div>
                    <form action="" onSubmit={handleSubmit} >
                        <div className={styles.item_info}>
                            <div className={styles.img_block}>
                                <img src={data.image} alt="" />
                            </div>
                            <div className={styles.item_porperties}>
                                <span className={styles.item_price}>{data.price}$</span>

                                <section className={styles.item_radio_block}>
                                    <span>Choose size</span>
                                    <div className={styles.item_buttons}>
                                        <div className={styles.item_size_button}>
                                            <input type="radio" name='size' id="s" defaultChecked />
                                            <label htmlFor='s'>S</label>
                                        </div>
                                        <div className={styles.item_size_button}>
                                            <input type="radio" name='size' id="m" />
                                            <label htmlFor='m'>M</label>
                                        </div>
                                        <div className={styles.item_size_button}>
                                            <input type="radio" name='size' id="l" />
                                            <label htmlFor='l'>L</label>
                                        </div>
                                        <div className={styles.item_size_button}>
                                            <input type="radio" name='size' id="xl" />
                                            <label htmlFor='xl'>XL</label>
                                        </div>
                                        <div className={styles.item_size_button}>
                                            <input type="radio" name='size' id="xxl" />
                                            <label htmlFor='xxl'>XXL</label>
                                        </div>
                                    </div>

                                </section>
                                <section className={styles.item_radio_block}>
                                    <span>Choose color</span>
                                    <div className={styles.item_buttons}>
                                        <div className={styles.item_color_button}>
                                            <input type="radio" name='color' id="brown" defaultChecked />
                                            <label htmlFor='brown' data-color='#927876'></label>
                                        </div>
                                        <div className={styles.item_color_button}>
                                            <input type="radio" name='color' id="grey" />
                                            <label htmlFor='grey' data-color='#D4D4D4'></label>
                                        </div>
                                        <div className={styles.item_color_button}>
                                            <input type="radio" name='color' id="pink" />
                                            <label htmlFor='pink' data-color='#FD9696'></label>
                                        </div>
                                        <div className={styles.item_color_button}>
                                            <input type="radio" name='color' id="yellow" />
                                            <label htmlFor='yellow' data-color='#FDC796'></label>
                                        </div>
                                    </div>
                                </section>

                                <section className={styles.submit_buttons}>
                                    <div className={styles.item_count}>
                                        <button type='button' onClick={() => setCounter(counter + 1)}>+</button>
                                        <input type="number" defaultChecked min={1} max={100} value={counter} onChange={(value) => Number(value.target.value) < 100 && setCounter(Number(value.target.value))} />
                                        <button type='button' onClick={() => setCounter(counter > 1 ? counter - 1 : counter)}>-</button>
                                    </div>
                                    <button type='submit' className='green_button'>Add to bin</button>
                                </section>
                            </div>
                        </div>
                    </form>
                    <RelatedProducts categories={data.category} />
                </>
            }
        </div>
    )
}