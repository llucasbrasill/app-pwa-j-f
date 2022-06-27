import React, { Suspense } from 'react'
import Loading from '../../components/loading';
import styles from './styles.module.css'
const Logo = React.lazy(() => import('../../components/logo'));
const Menu = React.lazy(() => import('../../components/menu'));
const Social = React.lazy(() => import('../../components/social'));


const Home: React.FC = () => {

    return <>
        <Suspense fallback={<Loading />}>
            <header className={styles.wrapper}>
                <Logo />
            </header>

            <section className={styles.section}>
                <Menu />
                <Social />
            </section>
        </Suspense>

    </>
}

export default Home