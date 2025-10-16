import './CategoriasEnVivo.css';

const categorias = [
    {
        id: 1,
        titulo: 'Just Chatting',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg',
        espectadores: '211,8 mil',
        etiquetas: ['IRL', 'Casual']
    },
    {
        id: 2,
        titulo: 'IRL',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/509660-285x380.jpg',
        espectadores: '133,7 mil',
        etiquetas: ['IRL', 'Aventura']
    },
    {
        id: 3,
        titulo: 'Grand Theft Auto V',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/32982-285x380.jpg',
        espectadores: '112,8 mil',
        etiquetas: ['Shooter', 'Acción']
    },
    {
        id: 4,
        titulo: 'Slots & Casino',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/26936_IGDB-285x380.jpg',
        espectadores: '59,4 mil',
        etiquetas: ['Azar', 'Casino']
    },
    {
        id: 5,
        titulo: 'League of Legends',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
        espectadores: '98,2 mil',
        etiquetas: ['MOBA', 'Competitivo']
    },
    {
        id: 6,
        titulo: 'Valorant',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
        espectadores: '85,6 mil',
        etiquetas: ['Shooter', 'Estrategia']
    },
    {
        id: 7,
        titulo: 'Minecraft',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/27471-285x380.jpg',
        espectadores: '73,1 mil',
        etiquetas: ['Sandbox', 'Creativo']
    },
    {
        id: 8,
        titulo: 'Fortnite',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
        espectadores: '68,9 mil',
        etiquetas: ['Battle Royale', 'Acción']
    },
    {
        id: 9,
        titulo: 'Counter-Strike',
        imagen: 'https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg',
        espectadores: '62,7 mil',
        etiquetas: ['Shooter', 'Competitivo']
    }
];

    function CategoriasEnVivo() {
    return (
        <section className="categorias-vivo">
        <h2>Categorías Top en vivo</h2>
        <div className="lista-categorias">
            {categorias.map(cat => (
            <div key={cat.id} className="tarjeta-categoria">
                <img src={cat.imagen} alt={cat.titulo} />
                <div className="nombre-categoria">{cat.titulo}</div>
                <div className="espectadores">{cat.espectadores} espectadores</div>
                <div className="etiquetas-categoria">
                {cat.etiquetas.map((e, i) => (
                    <span key={i} className="etq">{e}</span>
                ))}
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}

export default CategoriasEnVivo;
