import { SignOutButton, UserProfile } from '@clerk/clerk-react';
import './styles/perfil.css'

const experienciaActual = 320;
const nivelActual = 3;
const experienciaNivel = 500;
const niveles = [
    { nivel: 1, experiencia: 0 },
    { nivel: 2, experiencia: 100 },
    { nivel: 3, experiencia: 250 },
    { nivel: 4, experiencia: 500 },
    { nivel: 5, experiencia: 900 }
];

const Perfil = () => {
    return (
        <div  style={{ paddingTop: '5rem' }}>
            <SignOutButton className="sign-out-button">
                <button>Sign out</button>
            </SignOutButton>
            <div className="user-data">
                <h1>Datos De Usuario</h1>
                <div className="bloque-nivel">
                    <div>
                        <span className="nivel-actual">Nivel: {nivelActual}</span>
                    </div>
                    <div className="xp-info">
                        <span className="xp-label">XP:</span>
                        <span className="xp-num">{experienciaActual}</span>
                        <span className="xp-bar">/ {experienciaNivel}</span>
                    </div>
                    </div>
                    <div className="tabla-niveles">
                    <table>
                        <thead>
                            <tr>
                                <th>Nivel</th>
                                <th>XP</th>
                            </tr>   
                        </thead>
                        <tbody>
                        {niveles.map(n => (
                            <tr key={n.nivel} className={n.nivel === nivelActual ? 'activo' : ''}>
                                <td>{n.nivel}</td>
                                <td>{n.experiencia}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <UserProfile />
        </div>
    );
};

export default Perfil;
