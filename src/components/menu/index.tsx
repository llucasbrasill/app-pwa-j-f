import React from 'react'
import styles from './styles.module.css'
import icoBusinessSchool from '../../assets/images/icoBusinessSchool.svg'
import icoFamilySchool from '../../assets/images/icoFamilySchool.svg'
import icoGerminaTECH from '../../assets/images/icoGerminaTECH.svg'
import IcoCommunityGerminare from '../../assets/images/IcoCommunityGerminare.svg'

const Menu: React.FC = () => {

    return <>
        <nav className={styles.wrapper}>
            <ul>
                <li><a href={process.env.REACT_APP_LINK_1}><img src={icoBusinessSchool} alt="Germinare - Escola de Négocios" /></a></li>
                <li><a href={process.env.REACT_APP_LINK_2}><img src={icoFamilySchool} alt="Germinare - Escola da Família" /></a></li>
                <li><a href={process.env.REACT_APP_LINK_3}><img src={icoGerminaTECH} alt="GerminaTECH" /></a></li>
                <li><a href={process.env.REACT_APP_LINK_4}><img src={IcoCommunityGerminare} alt="Comunidade Germinare" /></a></li>
            </ul>
        </nav>
    </>
}

export default Menu