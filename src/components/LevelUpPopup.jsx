import './LevelUpPopup.css';

export default function LevelUpPopup({ level, onClose }) {
    return (
        <div className="levelup-overlay" onClick={onClose}>
            <div className="levelup-box">
                <h2>🎉 ¡Subiste de nivel!</h2>
                <p>Ahora eres <b>Nivel {level}</b></p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
