import React from 'react'
import styles from './styles.module.css'

const Menu: React.FC = () => {
    return <>
        <nav className={styles.wrapper}>
            <ul>
                <li><a href='http://brasfirst.com/'><img src="/assets/images/icoBusinessSchool.svg" alt="Germinare - Escola de Négocios"  /></a></li>
                <li><a href='http://brasfirst.com/'><img src="/assets/images/icoFamilySchool.svg" alt="Germinare - Escola da Família"  /></a></li>
                <li><a href='http://brasfirst.com/'><img src="/assets/images/icoGerminaTECH.svg" alt="GerminaTECH"  /></a></li>
                <li><a href='http://brasfirst.com/'><img src="/assets/images/IcoComunityGerminare.svg" alt="Comunidade Germinare"  /></a></li>
            </ul>
        </nav>
    </>
}

export default Menu