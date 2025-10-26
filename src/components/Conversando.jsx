import './Conversando.css';

const canales = [
    {
        id: 1,
        titulo: 'ARGENTINA VS COLOMBIA',
        imagen: 'https://i.ytimg.com/vi/tQNrhJZaSTw/maxresdefault.jpg',
        espectadores: '724',
        usuario: 'BenitoSDR',
        etiquetas: ['Español']
    },
    {
        id: 2,
        titulo: 'SE DEFINE LA SEMIFINAL DE...',
        imagen: 'https://i.ytimg.com/vi/KUYiTt-1t-k/maxresdefault.jpg',
        espectadores: '27,5 mil',
        usuario: 'davooxeneize',
        etiquetas: ['Español']
    },
    {
        id: 3,
        titulo: 'Noticias en Vivo',
        imagen: 'https://i.ytimg.com/vi/GpCjNRD8rd0/maxresdefault.jpg',
        espectadores: '1,200',
        usuario: 'NewsNow',
        etiquetas: ['Español', 'Actualidad']
    },
    {
        id: 4,
        titulo: 'Charlas de Tecnología',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '980',
        usuario: 'TechLatam',
        etiquetas: ['Español', 'Tecnología']
    },
    {
        id: 5,
        titulo: 'Debate Político',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '2,300',
        usuario: 'PoliticoHoy',
        etiquetas: ['Español', 'Debate']
    },
    {
        id: 6,
        titulo: 'Música Urbana',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '3,100',
        usuario: 'UrbanBeats',
        etiquetas: ['Español', 'Música']
    },
    {
        id: 7,
        titulo: 'Cocina en Directo',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '850',
        usuario: 'CocinaConMaria',
        etiquetas: ['Español', 'Cocina']
    },
    {
        id: 8,
        titulo: 'Viajes por Perú',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '1,700',
        usuario: 'ViajaPeru',
        etiquetas: ['Español', 'Viajes']
    },
    {
        id: 9,
        titulo: 'Gaming en Vivo',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '5,400',
        usuario: 'GamerLatino',
        etiquetas: ['Español', 'Gaming']
    },
    {
        id: 10,
        titulo: 'Charlas Motivacionales',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '620',
        usuario: 'MotivateHoy',
        etiquetas: ['Español', 'Motivación']
    },
    {
        id: 11,
        titulo: 'Cine y Series',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '2,800',
        usuario: 'CineFan',
        etiquetas: ['Español', 'Cine']
    },
    {
        id: 12,
        titulo: 'Fútbol Sudamericano',
        imagen: 'https://i.ytimg.com/vi/MPhmbqmV11M/maxresdefault.jpg',
        espectadores: '4,900',
        usuario: 'FutbolSud',
        etiquetas: ['Español', 'Deportes']
    },
    {
        id: 13,
        titulo: 'Arte en Vivo',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '430',
        usuario: 'ArteLatino',
        etiquetas: ['Español', 'Arte']
    },
    {
        id: 14,
        titulo: 'Podcast Lima',
        imagen: 'https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg',
        espectadores: '1,050',
        usuario: 'PodcastLima',
        etiquetas: ['Español', 'Podcast']
    }
];

function Conversando() {
    return (
        <section className="conversando-seccion">
        <h2>Conversando</h2>
        <div className="lista-conversando">
            {canales.map(chat => (
            <div key={chat.id} className="tarjeta-conversando">
                <div className="tag-live">EN VIVO</div>
                <img src={chat.imagen} alt={chat.titulo} />
                <div className="cvs-info">
                <div className="cvs-espectadores">{chat.espectadores} espectadores</div>
                <div className="cvs-titulo">{chat.titulo}</div>
                <div className="cvs-usuario">{chat.usuario}</div>
                <div className="cvs-etiquetas">
                    {chat.etiquetas.map((e, i) => (
                    <span key={i} className="cvs-etq">{e}</span>
                    ))}
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default Conversando;
