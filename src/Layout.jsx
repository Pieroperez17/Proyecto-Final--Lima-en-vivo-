import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

import './index.css';

const Layout = () => {
    const [open, setOpen] = useState(false);

    // Simular navegación (en tu app real usa React Router)
    const handleNavClick = (section) => {
        setOpen(false);
        console.log(`Navegando a: ${section}`);
    };

    return (
    <div className="contendor">
            <header className="navbar">
                <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <h2 className="logo">Lima en Vivo</h2>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <button 
                            onClick={() => handleNavClick('inicio')}
                            className="nav-link"
                        >
                            Inicio
                        </button>
                        <button 
                            onClick={() => handleNavClick('nosotros')}
                            className="nav-link"
                        >
                            Nosotros
                        </button>
                        <button 
                            onClick={() => handleNavClick('perfil')}
                            className="nav-link"
                        >
                            Perfil
                        </button>
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
                    <button
                        onClick={() => handleNavClick('inicio')}
                        className="nav-link-mobile"
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => handleNavClick('nosotros')}
                        className="nav-link-mobile"
                    >
                        Nosotros
                    </button>
                    <button
                        onClick={() => handleNavClick('perfil')}
                        className="nav-link-mobile"
                    >
                        Perfil
                    </button>
                    </div>
                </nav>
                </div>
            </header>
            
            <main className="main">
                <Outlet />
            </main>

            <footer>
                <p>Mi primer proyecto con Redact Router</p>
            </footer>
        </div>
    );
};
export default Layout;    