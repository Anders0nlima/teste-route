import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Agencia from './pages/Agencia'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Paises from './pages/Paises'
import NavBar from './components/layout/NavBar'
import Inexistente from './pages/Inexistente'


function App() {
  return (
   <>
   
   <Router>
<NavBar/>
<Routes>

  <Route path='/' element={<Agencia/>}>

  </Route>

  <Route path='/sobre' element={<Sobre/>}>

  </Route>

  <Route path='/contato' element={<Contato/>}>

   </Route>

  <Route path='/paises' element={<Paises/>}>

  </Route> 

  <Route path='/*' element={<Inexistente/>}>

  </Route> 


</Routes>

</Router>
   </>

   

   
   
  );
}

export default App;
