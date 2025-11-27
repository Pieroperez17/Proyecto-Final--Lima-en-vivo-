import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoGiftOutline } from "react-icons/io5";
import './styles/stream.css'
import { Scale } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';


const ChatSidebar = ({ data, setData }) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const initial = data?.mensajes || [];
    const [messages, setMessages] = useState(initial);
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);
    const { user } = useUser();

    // Nuevo: estado para modal de regalos
    const [showGifts, setShowGifts] = useState(false);

    // Lista de regalos (puedes ajustar nombres/precios/ids)
    const gifts = [
        { id: 'Regalo1', name: 'Corazón', price: 1 },
        { id: 'Regalo2', name: 'Flores', price: 2 },
        { id: 'Regalo3', name: 'Estrella', price: 5 },
        { id: 'Regalo4', name: 'Copa', price: 10 }
    ];

    useEffect(() => {
        setMessages(data?.mensajes || []);
    }, [data]);

    const handleSend = async () => {
        const text = input.trim();
        if (!text) return;

        const newMessage = {
            usuario: user?.firstName || 'Anon',
            nivel: 1,
            mensaje: text
        };

        // UI optimista
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setInput("");
        setSending(true);

        try {
            const res = await fetch(`${BACKEND_URL}/streams/mensajes/${data.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMessage)
            });

            if (!res.ok) throw new Error('Error enviando mensaje');

            const updated = await res.json();
            if (typeof setData === 'function') setData(updated);
            else setMessages(updated.mensajes || updatedMessages);
        } catch (err) {
            console.error(err);
            setMessages(messages);
            alert('Error al enviar el mensaje');
        } finally {
            setSending(false);
        }
    };

    // Nuevo: abrir modal de regalos
    const handleSendGift = () => {
        setShowGifts(true);
    };

    // Nuevo: comprar regalo -> cerrar modal y mostrar alerta
    const handleBuyGift = (gift) => {
        setShowGifts(false);
        // aquí podrías llamar a una API para procesar pago / registro del regalo
        window.alert(`Envíaste un regalo: ${gift.name} — Precio: ${gift.price}`);
    };

    return (
        <div className="chat-sidebar">
            <h3>Chat en vivo</h3>
            <div className="chat-messages">
                {messages.length === 0 && <p className="empty-chat">Sé el primero en saludar 👋</p>}
                {messages.map((msg, idx) => (
                    <div key={idx} className="chat-message">
                        <span className="chat-user">{msg.usuario}</span>
                        <span className="level-user"> Level {msg.nivel} :</span>
                        <span> {msg.mensaje}</span>
                    </div>
                ))}
            </div>

            <div className="chat-input-wrapper">
                <button onClick={handleSendGift} className="chat-send-btn2" disabled={sending} title="Enviar regalo">
                    <IoGiftOutline size={22} />
                </button>

                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="chat-input"
                    onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                />
                <button onClick={handleSend} className="chat-send-btn" disabled={sending}>
                    {sending ? 'Enviando...' : 'Enviar'}
                </button>
            </div>

            {showGifts && (
                <div className="gift-modal-overlay" role="dialog" aria-modal="true">
                    <div className="gift-modal">
                        <header className="gift-modal-header">
                            <h4>Enviar regalo</h4>
                            <button className="gift-close" onClick={() => setShowGifts(false)}>×</button>
                        </header>
                        <div className="gift-list">
                            {gifts.map(g => (
                                <div key={g.id} className="gift-item">
                                    <div className="gift-info">
                                        <div className="gift-name">{g.name}</div>
                                        <div className="gift-price">S/ {g.price}</div>
                                    </div>
                                    <button className="gift-buy-btn" onClick={() => handleBuyGift(g)}>
                                        Comprar
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const StreamerNotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>😕 Streamer no encontrado</h1>
                <p>Lo sentimos, el streamer que buscas no existe en nuestra plataforma.</p>
            </div>
        </div>
    );
};

const StreamerProfile = ({ data }) => {
    return (
        <div className="profile-container">
            <div className="stream-preview">
                <img src={data.streamPreview} alt="Preview del stream" />
            </div>
            <div className="profile-main">
                <img className="avatar" src={data.avatar} alt={data.nombre} />
                <div className="profile-info">
                <h2>{data.nombre}</h2>
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
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const fetchStreams = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/streams`);
                if (!res.ok) throw new Error('Error fetching streams');
                const streams = await res.json();
                const found = Array.isArray(streams) ? streams.find(s => s.nombre === id) : null;
                if (!cancelled) setData(found || null);
            } catch (err) {
                console.error(err);
                if (!cancelled) setData(null);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchStreams();
        return () => { cancelled = true; };
    }, [id]);

    if (loading) return <div className="loading">Cargando...</div>;



    if (!data) {
        console.log(data);
        return <StreamerNotFound />;
    }

    return (
        <div className="streamer-page-layout">
            <div className="profile-section">
                <StreamerProfile data={data} />
            </div>
            <ChatSidebar data={data} setData={setData}/>
        </div>
    );
}

export default StreamerProfilePage;