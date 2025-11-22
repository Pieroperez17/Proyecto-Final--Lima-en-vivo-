import './App.css'
import Inicio from './pages/Inicio'
import Layout from './Layout'
import Nosotros from './pages/Nosotros'
import Perfil from './pages/Perfil'
import StreamerProfilePage from './pages/streamerprofile'
import {BrowserRouter as Router ,Route,Routes, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import { ProtectedRoutes } from './routes/ProtectedRoutes'

function App() {  
  return (
    <>
      <Router>
        <Routes>
          {/* Redirigir raíz "/" a login */}
          <Route path='/' element={<Navigate to="/login" replace />} />
          {/* Ruta de Login SIN Layout */}
          <Route path='/login' element={<Login />} />
          {/* Rutas principales con Layout */}
          <Route path='inicio' element={<ProtectedRoutes><Layout><Inicio /></Layout></ProtectedRoutes>} />
          <Route path='nosotros' element={<ProtectedRoutes><Layout><Nosotros /></Layout></ProtectedRoutes>} />
          <Route path='perfil' element={<ProtectedRoutes><Layout><Perfil /></Layout></ProtectedRoutes>} />
          <Route path='stream/:id' element={<ProtectedRoutes><Layout><StreamerProfilePage /></Layout></ProtectedRoutes>} />
          
          {/* Redirigir cualquier otra ruta a login */}
          <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
