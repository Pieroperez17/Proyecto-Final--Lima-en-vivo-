import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import { useUser } from "@clerk/clerk-react";

import './index.css';

const Layout = ({children}) => {
    const [open, setOpen] = useState(false);
    const [saldo, setSaldo] = useState(null);

    const { user, isLoaded, isSignedIn } = useUser();

    // === Obtener saldo del backend ===
    useEffect(() => {
        if (!isLoaded || !isSignedIn) return;

        const fetchSaldo = async () => {
            try {
                // ID NUMÉRICO (EL QUE DIJISTE)
                const idUsuario = user?.publicMetadata?.Id_usuario;

                // Si no tiene Id_usuario, no pedimos nada
                if (!idUsuario) return;

                const res = await fetch(`http://localhost:3000/users/${idUsuario}`);
                const data = await res.json();

                setSaldo(data.saldoMonedas);
            } catch (err) {
                console.error("Error obteniendo saldo:", err);
            }
        };

        fetchSaldo();
    }, [isLoaded, isSignedIn, user]);

    return (
    <div className="container">
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar-content">

                        {/* Logo */}
                        <h2 className="logo">🟠Lima en Vivo</h2>

                        {/* SALDO MONEDAS (solo si hay usuario) */}
                        {isSignedIn && (
                            <div style={{
                                marginRight: "1rem",
                                padding: "0.4rem 0.8rem",
                                background: "#fa7725",
                                borderRadius: "10px",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                boxShadow: "0px 0px 6px #00000050"
                            }}>
                                🪙 {saldo !== null ? saldo : "..."}
                            </div>
                        )}

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
                            <Link 
                                to={'/tyc'}
                                className="nav-link"
                            >
                                TYC
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
                        <Link to="/tyc" className="footer-link">TYC</Link>
                        
                    </nav>
                </div>
            </footer>
        </div>
    );
};
export default Layout;
