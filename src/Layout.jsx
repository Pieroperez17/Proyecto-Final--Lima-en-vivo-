import { Outlet, Link } from "react-router-dom";

import './index.css';

const Layout = () => {
    return (
        <div className="contendor">
            <header>
                <h2>Lima en Vivo</h2>
                <nav className="nav-header">
                    <Link to="/">Inicio</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/perfil">Perfil</Link>
                </nav>
            </header>
            
            <main className="main">
                <Outlet />
            </main>

            <footer>
                <p>Mi primer proyecto con React Router</p>
            </footer>
        </div>
    );
};
export default Layout;    