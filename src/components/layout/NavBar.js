import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'



function NavBar(){
return(
    <div className={styles.list}>
        
          <Link className={styles.item} to="/">Agencia</Link>
        
        
          <Link className={styles.item} to="/sobre">Sobre</Link>
        
        
          <Link className={styles.item} to="/contato">Contato</Link>
        
        
          <Link className={styles.item} to="/paises">Países</Link>
        
    </div>
)
}

export default NavBar