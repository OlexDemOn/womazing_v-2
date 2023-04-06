import styles from './dreem_team.module.scss';
import DreamTeamSlider from './dream_team_slider';
import { Link } from 'react-router-dom';

export default function DreemTeam() {
    return (
        <div className={styles.main}>
            <h2 className='big_title'>The Womazing Dream Team</h2>
            <div className={styles.content}>
                <div className={styles.img_block}>
                    <DreamTeamSlider />
                </div>
                <section className={styles.info}>
                    <h2 className='title'>For each</h2>
                    <p>Every girl is unique.</p>
                    <p>However, we are similar in a million little things.</p>
                    <p>Womazing seeks out these little things and creates beautiful things that highlight each girl's virtues.</p>
                    <Link to="/" className='link_active'> Read more about the brand</Link>
                </section>
            </div>
        </div>
    )
}