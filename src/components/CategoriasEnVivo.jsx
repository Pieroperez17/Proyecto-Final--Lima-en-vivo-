import './CategoriasEnVivo.css';
import { useEffect,useState } from 'react';
import { ThreeDot } from 'react-loading-indicators'

function CategoriasEnVivo() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const fetchCategorias = async () => {
            try {
                const res = await fetch(`${BACKEND_URL}/categorias`);
                if (!res.ok) throw new Error('Error fetching categorias');
                const data = await res.json();
                if (mounted) setCategorias(data);
            } catch (err) {
                console.error(err);
                if (mounted) setCategorias([]);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchCategorias();
        return () => { mounted = false; };
    }, [BACKEND_URL]);

    if (loading) return (
        
        <div style={{ display: 'flex', gap:'2rem'  ,justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <h3 className="loading">Cargando categorías   </h3>
                <ThreeDot variant="bounce" color="#fa7725f1" size="small" text="" textColor="" />
        </div>
    );

    return (
        
        <section className="categorias-vivo">
        <h2>Categorías Top en vivo</h2>
        <div className="lista-categorias">
            {categorias.slice(0, 6).map(cat => (
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
