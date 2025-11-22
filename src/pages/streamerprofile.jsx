import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IoGiftOutline } from "react-icons/io5";
import Streams from '../data/streams';
import './styles/stream.css'
import { Scale } from 'lucide-react';

const getDataById = (id) => {
    return Streams.find(stream => stream.nombre.toLowerCase() === id.toLowerCase());
};
function ChatSidebar() {
    const [messages, setMessages] = useState([
        { user: "Juan", level: 2, text: "¡Hola! ¿Ya empezó el stream?" },
        { user: "Ana", level: 1, text: "¡Sí! Justo ahora." },
        { user: "Streamer Ejemplo", level: 5, text: "¡Bienvenidos al stream!" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if(input.trim().length === 0) return;
        setMessages([...messages, { user: "Tú",level: 3, text: input }]);
        setInput("");
    };

    return (
        <div className="chat-sidebar">
            <h3>Chat en vivo</h3>
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                <div key={idx} className="chat-message">
                    <span className="chat-user">{msg.user}</span>
                    <span className="level-user">Level {msg.level} :</span>
                    <span>{msg.text}</span>
                </div>
                ))}
            </div>
            <div className="chat-input-wrapper">
                <button onClick={handleSend} className="chat-send-btn2">
                    <IoGiftOutline size={25} />
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
    var data = getDataById(id);
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
    return (
        <div className="streamer-page-layout">
            <div className="profile-section">
                <StreamerProfile />
            </div>
            <ChatSidebar />
        </div>
    );
}
export default StreamerProfilePage;