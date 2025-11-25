import './StreamsVivo.css';
import { useState, useEffect } from 'react';
import { ThreeDot } from 'react-loading-indicators'
import { Link } from 'react-router-dom';

function StreamsVivo() {
    const [canales, setCanales] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const fetchStreams = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/streams`);
                if (!res.ok) throw new Error('Error fetching streams');
                const streams = await res.json();
                if (!cancelled) setCanales(streams);
            } catch (err) {
                console.error(err);
                if (!cancelled) setCanales(null);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchStreams();
        return () => { cancelled = true; };
    }, []);

    if (loading) return (
        <div style={{ display: 'flex', gap:'2rem'  ,justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <h3 className="loading">Cargando Streams   </h3>
                <ThreeDot variant="bounce" color="#fa7725f1" size="small" text="" textColor="" />
        </div>
    );

    return (
        <section className="conversando-seccion">
        <h2>Streams En Vivo</h2>
        <div className="lista-conversando">
            {canales.map(chat => (
                <Link key={chat.nombre} className="tarjeta-conversando" to={`/stream/${chat.nombre}`}>
                    <div className="tag-live">EN VIVO</div>
                    <img src={chat.streamPreview} alt={chat.nombre} />
                    <div className="cvs-info">
                    <div className="cvs-espectadores">{chat.estadisticas.promedioEspectadores} espectadores</div>
                    <div className="cvs-titulo">{chat.nombre}</div>
                    <div className="cvs-usuario">{chat.usuario}</div>
                    <div className="cvs-etiquetas">
                        {chat.etiquetas.map((e, i) => (
                            <span key={i} className="cvs-etq">{e}</span>
                        ))}
                    </div>
                    </div>
                </Link>
            ))}
        </div>
        </section>
    );
}

export default StreamsVivo;
