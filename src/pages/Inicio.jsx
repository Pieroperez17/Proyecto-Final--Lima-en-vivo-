import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';
import LiveCategories from '../components/Sidebar';
import CategoriasEnVivo from '../components/CategoriasEnVivo';
import Conversando from '../components/Conversando';

// 👇 IMPORTA EL POPUP
import GiftPopup from '../components/GiftPopup';

const Inicio = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    const [mostrarPopup, setMostrarPopup] = useState(false); // 👈 ESTADO PARA CONTROLAR POPUP

    console.log(user.fullName);

    if (!isLoaded || !isSignedIn) {
        return <div>Cargando...</div>;
    }

    return (
        <div style={{ paddingTop: '4rem' }}>
            {/* 👇 Botón para abrir popup */}
            <button
                onClick={() => setMostrarPopup(true)}
                style={{
                    background: '#9147ff',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '16px'
                }}
            >
                🎁 Enviar regalo
            </button>

            {/* 👇 MOSTRAR POPUP SOLO SI ES TRUE */}
            {mostrarPopup && (
                <GiftPopup onClose={() => setMostrarPopup(false)} />
            )}

            <CategoriasEnVivo />
            <Conversando />
        </div>
    );
};

export default Inicio;
