import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';

import './index.css';

const Layout = ({children}) => {
    const [open, setOpen] = useState(false);


    return (
    <div className="container">
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">
                        {/* Logo */}
                        <h2 className="logo">🔴Lima en Vivo</h2>

                        {/* Desktop Navigation */}
                        <nav className="nav-desktop">
                            <Link 
                                to={'/inicio'}
                                className="nav-link"
                            >
                                Inicio
                            </Link>
                            <Link 
                                to={'/nosotros'}
                                className="nav-link"
                            >
                                Nosotros
                            </Link>
                            <Link 
                                to={'/perfil'}
                                className="nav-link"
                            >
                                Perfil
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                        className="menu-toggle"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation"
                        >
                        {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className={`nav-mobile ${open ? 'open' : ''}`}>
                        <div className="nav-mobile-content">
                        <Link
                            to={'/inicio'}
                            className="nav-link-mobile"
                        >
                            Inicio
                        </Link>
                        <Link
                            to={'/nosotros'}
                            className="nav-link-mobile"
                        >
                            Nosotros
                        </Link>
                        <Link
                            to={'/perfil'}
                            className="nav-link-mobile"
                        >
                            Perfil
                        </Link>
                        </div>
                    </nav>
                </div>
            </header>
            <Sidebar />
            
            <main className="main">
                {children}
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <p>
                        © {new Date().getFullYear()} Lima en Vivo. Todos los derechos reservados.
                    </p>
                    <nav className="footer-nav">
                        <Link to="/inicio" className="footer-link">Inicio</Link>
                        <Link to="/nosotros" className="footer-link">Nosotros</Link>
                        <Link to="/perfil" className="footer-link">Perfil</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
};
export default Layout;    