import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer';
import styles from './styles.module.scss'

const LayoutV1 = ({children}) =>{
    return (
        <div className={styles.layoutContainer}>
             <Menu/>
            {children}
            <Footer/>
        </div>
    )
}

export default LayoutV1;