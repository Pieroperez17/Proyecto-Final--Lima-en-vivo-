import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

import Sidebar from '../components/Sidebar';
import LiveCategories from '../components/Sidebar';
import CategoriasEnVivo from '../components/CategoriasEnVivo';
import Conversando from '../components/Conversando';

// 👇 IMPORTA POPUPS
import GiftPopup from '../components/GiftPopup';
import LevelUpPopup from '../components/LevelUpPopup';

const Inicio = () => {
    const { user, isLoaded, isSignedIn } = useUser();

    // 🎁 Popup de Regalos
    const [mostrarGiftPopup, setMostrarGiftPopup] = useState(false);

    // ⭐ Popup de Level Up
    const [mostrarLevelUp, setMostrarLevelUp] = useState(false);
    const [nivelActual, setNivelActual] = useState(1);

    if (!isLoaded || !isSignedIn) {
        return <div>Cargando...</div>;
    }

    // 🎁 Acción cuando se selecciona un regalo
    const handleSelectGift = (gift) => {
        alert(`Enviaste ${gift.name} (🪙 ${gift.price})`);
        setMostrarGiftPopup(false);
    };

    // ⭐ Simulación de subir de nivel cada 15 segundos
    //    (puedes reemplazarlo luego por tu backend)
    useEffect(() => {
        const intervalo = setInterval(() => {
            setNivelActual(prev => {
                const nuevo = prev + 1;
                setMostrarLevelUp(true); // activar popup
                return nuevo;
            });
        }, 15000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div style={{ paddingTop: '4rem' }}>

            {/* 🎁 BOTÓN PARA ABRIR EL POPUP DE REGALOS */}
            <button
                onClick={() => setMostrarGiftPopup(true)}
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

            {/* 🎁 POPUP DE REGALOS */}
            {mostrarGiftPopup && (
                <GiftPopup
                    onClose={() => setMostrarGiftPopup(false)}
                    onSelectGift={handleSelectGift}
                />
            )}

            {/* ⭐ POPUP DE LEVEL UP */}
            {mostrarLevelUp && (
                <LevelUpPopup
                    level={nivelActual}
                    onClose={() => setMostrarLevelUp(false)}
                />
            )}

            <CategoriasEnVivo />
            <Conversando />
        </div>
    );
};

export default Inicio;
