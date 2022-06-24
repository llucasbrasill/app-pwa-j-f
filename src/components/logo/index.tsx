import React from 'react'
import styles from './styles.module.css'

type Props =  {
    page?: "Small" | "Medium"
}
const Logo: React.FC= ({ page }: Props) => {
    return <>
            <a href='http://brasfirst.com'><img className={styles.logo} src="/assets/images/ArtLogoHome.svg" alt="App Title"  /></a>
    </>
}

export default Logo