import './App.css'
import Inicio from './pages/Inicio'
import Layout from './Layout'
import Nosotros from './pages/Nosotros'
import Perfil from './pages/Perfil'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path='nosotros' element={<Nosotros />} />
            <Route path='perfil' element={<Perfil />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
