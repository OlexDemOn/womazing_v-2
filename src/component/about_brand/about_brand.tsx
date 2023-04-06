import { Link } from 'react-router-dom'
import styles from './about_brand.module.scss'
export default function AboutBrand() {

    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h2 className='big_title'>About brand</h2>
                <span><Link to='/'>Main</Link> - <Link to='/about_brand' className={styles.last_link}>About brand</Link></span>
            </div>

            <section className={styles.content_block}>
                <div className={styles.content_img}>
                    <img src="https://futuremrsbox.com/wp-content/uploads/2019/08/sonnie-hiles-gG70fyu3qsg-unsplash-scaled.jpg" alt="" />
                </div>
                <div className={styles.content_text}>
                    <span className='title'>An idea and a woman</span>
                    <p>Womazing was founded in 2010 and has become one of the most successful companies in our country. Like many Italian companies, Womazing remains a family company, although none of the family members are fashion designers.</p>
                    <p>We operate according to a successful formula, using famous fashion designers to create our collections. This method has been described by fashion critic Colin McDowell as a form of design co-creation, characteristic of a number of Italian prêt-à-porter companies.</p>
                </div>
            </section>
            <section className={styles.content_block}>
                <div className={styles.content_text}>
                    <span className='title'>Magic in detail</span>
                    <p>The first Womazing store opened in a small town in the north of the country in 2010. The first collection consisted of two coats and a suit, which were copies of Parisian models.</p>
                    <p>Despite the fact that the founder was a lawyer by education, her family has always been closely associated with sewing (great-grandmother of the founder sewed clothes for women, and her mother founded a professional school of cutting and sewing). The desire to produce clothes for the masses held great promise, especially at a time when haute couture was still dominant and the market for quality prêt-à-porter simply did not exist.</p>
                </div>
                <div className={styles.content_img}>
                    <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" alt="" />
                </div>
            </section>
        </div>
    )
}