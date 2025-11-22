import { useParams } from 'react-router-dom';
import { useState } from 'react';
import GiftPopup from '../components/GiftPopup';
import LevelUpPopup from '../components/LevelUpPopup';   // ⭐ AGREGADO

import './styles/stream.css'

const data = {
    id: 1,
    nombre: 'Streamer Ejemplo',
    descripcion: 'Streamer apasionado por los videojuegos, la tecnología y las charlas en vivo. Conecta con su comunidad cada semana con contenido divertido y autenticidad total.',
    avatar: 'https://i.ytimg.com/vi/HjNDEQ0VP6c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDzqYqmcwqZQoD5TTmpO96s5g50Q',
    streamPreview: 'https://i.ytimg.com/vi/mGLoMdDF7ag/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD21gGZ4OpGVv3Z4zB6dWc5uqWuQA',
    seguidores: 1234,
    enVivo: false,
    categoria: 'Just Chatting',
    pais: 'Perú',
    plataforma: 'YouTube Live',
    duracionPromedio: '2 horas',
    etiquetas: ['gaming', 'charlas', 'comunidad', 'humor'],
    redes: {
        youtube: 'https://www.youtube.com/@streamerejemplo',
        instagram: 'https://instagram.com/streamer_ejemplo',
        tiktok: 'https://www.tiktok.com/@streamerejemplo',
        twitter: 'https://twitter.com/streamerejemplo'
    },
    estadisticas: {
        visualizacionesTotales: 18500,
        streamsRealizados: 57,
        promedioEspectadores: 320,
        likesTotales: 6900
    },
    destacado: true,
    horarioTransmision: 'Lunes, miércoles y viernes de 6pm a 8pm',
    fechaRegistro: '2024-04-12',
};

function ChatSidebar({ onOpenGift }) {
    const [messages, setMessages] = useState([
        { user: "Juan", level: 2, text: "¡Hola! ¿Ya empezó el stream?" },
        { user: "Ana", level: 1, text: "¡Sí! Justo ahora." },
        { user: "Streamer Ejemplo", level: 5, text: "¡Bienvenidos al stream!" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim().length === 0) return;
        setMessages([...messages, { user: "Tú", level: 3, text: input }]);
        setInput("");
    };

    return (
        <div className="chat-sidebar">
            <h3>Chat en vivo</h3>
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className="chat-message">
                        <span className="chat-user">{msg.user} </span>
                        <span className="level-user">Level {msg.level} :</span>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="chat-input-wrapper">

                {/* 🎁 BOTÓN DE REGALOS → abre popup */}
                <button
                    onClick={onOpenGift}
                    className="chat-send-btn"
                >
                    🎁
                </button>

                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="chat-input"
                />
                <button onClick={handleSend} className="chat-send-btn">Enviar</button>
            </div>
        </div>
    );
}


const StreamerProfile = () => {
    const { id } = useParams();

    return (
        <div className="profile-container">
            <div className="stream-preview">
                <img src={data.streamPreview} alt="Preview del stream" />
            </div>
            <div className="profile-main">
                <img className="avatar" src={data.avatar} alt={data.nombre} />
                <div className="profile-info">
                    <h2>{id}</h2>
                    <span className="categoria">{data.categoria}</span>
                    <p className="descripcion">{data.descripcion}</p>
                    <div className="etiquetas">
                        {data.etiquetas.map((etiqueta, idx) => (
                            <span className="etiqueta" key={idx}>#{etiqueta}</span>
                        ))}
                    </div>
                    <div className="redes">
                        <a href={data.redes.youtube} target="_blank">YouTube</a>
                        <a href={data.redes.instagram} target="_blank">Instagram</a>
                        <a href={data.redes.tiktok} target="_blank">TikTok</a>
                        <a href={data.redes.twitter} target="_blank">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="profile-stats">
                <div>
                    <span className="stat-num">{data.seguidores}</span>
                    <span className="stat-label">Seguidores</span>
                </div>
                <div>
                    <span className="stat-num">{data.estadisticas.visualizacionesTotales}</span>
                    <span className="stat-label">Visualizaciones totales</span>
                </div>
                <div>
                    <span className="stat-num">{data.estadisticas.promedioEspectadores}</span>
                    <span className="stat-label">Promedio espectadores</span>
                </div>
                <div>
                    <span className="stat-num">{data.estadisticas.likesTotales}</span>
                    <span className="stat-label">Likes totales</span>
                </div>
            </div>
            <div className="profile-meta">
                <p><b>País:</b> {data.pais}</p>
                <p><b>Plataforma:</b> {data.plataforma}</p>
                <p><b>Horario:</b> {data.horarioTransmision}</p>
                <p><b>Desde:</b> {data.fechaRegistro}</p>
            </div>
        </div>
    );
};


function StreamerProfilePage() {

    // 🎁 POPUP DE REGALOS
    const [giftOpen, setGiftOpen] = useState(false);

    // ⭐ POPUP DE LEVEL UP
    const [levelUpOpen, setLevelUpOpen] = useState(false);
    const [newLevel, setNewLevel] = useState(0);

    const handleSelectGift = (gift) => {
        alert(`Enviaste: ${gift.name} (🪙 ${gift.price})`);
        setGiftOpen(false);
    };

    // ⭐ función para simular Level Up
    const triggerLevelUp = () => {
        setNewLevel(6); // valor temporal para prueba
        setLevelUpOpen(true);
    };

    return (
        <div className="streamer-page-layout">

            <div className="profile-section">
                <StreamerProfile />
            </div>

            <ChatSidebar onOpenGift={() => setGiftOpen(true)} />

            {/* POPUP DE REGALOS */}
            <GiftPopup
                open={giftOpen}
                onClose={() => setGiftOpen(false)}
                onSelectGift={handleSelectGift}
            />

            {/* ⭐ POPUP DE LEVEL UP */}
            <LevelUpPopup
                open={levelUpOpen}
                level={newLevel}
                onClose={() => setLevelUpOpen(false)}
            />

            {/* 🔘 BOTÓN PARA PROBAR LEVEL UP */}
            <button
                onClick={triggerLevelUp}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    padding: "10px 20px"
                }}
            >
                Test Level UP
            </button>

        </div>
    );
}

export default StreamerProfilePage;
