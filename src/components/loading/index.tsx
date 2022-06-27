import ArtLogoHome from '../../assets/images/artLogoHome.svg'
import ArtLayerLoading from '../../assets/images/artLayerLoading.svg'
import styles from './styles.module.css'

const Loading: React.FC = () => {

    return <>

        <img className={styles.logo} src={ArtLogoHome} alt="" />
        <img className={styles.loading} src={ArtLayerLoading} alt="" />

    </>
}

export default Loading