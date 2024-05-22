import { Link } from "react-router-dom"
import styles from "./Button.module.css"

function Paises (){
    return (
        <>
        <h1>Essa é a pagina de Países</h1>
        <p>aperte aqui para voltar para agencia</p>
        <div className={styles.d}>
        <Link className={styles.button} to="/">Voltar</Link>
        </div>
           
        </>
        
        
    )
}

export default Paises