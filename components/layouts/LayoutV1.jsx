import Menu from '../../components/menu/Menu'
import Dashboard from '../../containers/Home';
import styles from './styles.module.scss'

const LayoutV1 = ({children}) =>{
    return (
        <div className={styles.layoutContainer}>
             <Menu/>
            {children}
        </div>
    )
}

export default LayoutV1;