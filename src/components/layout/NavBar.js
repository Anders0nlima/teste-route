import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../img/logo-nav.png'


function NavBar(){
return(
    
    


    <div className={styles.list}>

        <div className={styles.logoGeral}>
        <img className={styles.logo} src={Logo} alt="Logo da navegação" />
        </div>

        
            
          <Link className={styles.item} to="/">Agencia</Link>
        
        
          <Link className={styles.item} to="/sobre">Sobre</Link>
      
      
          <Link className={styles.item} to="/contato">Contato</Link>
      
      
          <Link className={styles.item} to="/paises">Países</Link>
        
        
        
    </div>
)
}

export default NavBar