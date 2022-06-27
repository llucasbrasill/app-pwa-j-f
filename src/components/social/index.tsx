import React from 'react'
import styles from './styles.module.css'
import icoLinkedIn from '../../assets/images/icoLinkedIn.svg'
import IcoTiktok from '../../assets/images/icoTiktok.svg'
import icoInstagram from '../../assets/images/icoInstagram.svg'


const Social: React.FC = () => {
    return <>
        <h3 className={styles.title}>Acompanhe nossas Redes Sociais</h3>
        <ul className={styles.wrapper}>
            <li><a href={process.env.REACT_APP_LINKEDIN}><img src={icoLinkedIn} alt="" /> Instituto J&F</a></li>
            <li><a href={process.env.REACT_APP_TIKTOK}><img src={IcoTiktok} alt="" /> Germinare</a></li>
            <li><a href={process.env.REACT_APP_INSTAGRAM}><img src={IcoTiktok} alt="" /> Germinare</a></li>
            <li><a href={process.env.REACT_APP_INSTAGRAM_TECH}><img src={icoInstagram} alt="" /> GerminareTech</a></li>
        </ul>
    </>
}

export default Social