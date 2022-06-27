import React from 'react'
import styles from './styles.module.css'
import ArtLogoHome from '../../assets/images/artLogoHome.svg'

const Logo: React.FC = () => {
    return <>
        <a href='/'><img className={styles.logo} src={ArtLogoHome} alt="" /></a>
    </>
}

export default Logo