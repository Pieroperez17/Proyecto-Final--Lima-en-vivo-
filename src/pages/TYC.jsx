import React from 'react';
import './styles/Nosotros.css';
import './styles/tyc.css';
import { useParams } from 'react-router-dom';

const TYC = () => {
    return (
    
        <section class="terms-section">
            <br />
            <h2 class="terms-title">Términos y Condiciones</h2>

            <div class="terms-content">
                <p>
                Al acceder y utilizar <b>Lima en Vivo</b>, aceptas cumplir con todas nuestras reglas y
                políticas internas diseñadas para garantizar una experiencia segura, respetuosa y agradable
                para todos los usuarios de la plataforma. Buscamos ofrecer un espacio donde cualquier creador
                pueda compartir contenido en directo y conectar con su audiencia sin riesgos ni abusos.
                </p>

                <p>
                <strong>*Normas de contenido y convivencia:</strong><br />
                Todo el contenido transmitido debe seguir nuestras normas comunitarias. Está estrictamente
                prohibido compartir material ilegal, violento, discriminatorio, sexualmente explícito,
                dañino o que infrinja derechos de autor. Tampoco se permite lenguaje ofensivo extremo ni
                promover actividades peligrosas. Podemos suspender o eliminar cuentas que incumplan estas
                reglas sin previo aviso.
                </p>

                <p>
                <strong>*Edad mínima y responsabilidad del usuario:</strong><br />
                Para utilizar la plataforma debes tener al menos <b>13 años</b>. Cada usuario es
                responsable de la seguridad de su cuenta, su contraseña y toda actividad realizada en ella.
                Recomendamos no compartir credenciales y habilitar opciones de protección adicionales.
                </p>

                <p>
                <strong>*Propiedad del contenido y permisos:</strong><br />
                El contenido que crees o transmitas te pertenece. Sin embargo, al usar Lima en Vivo nos
                otorgas un permiso mundial y libre de regalías para almacenarlo, retransmitirlo y
                distribuirlo dentro de los servicios de la plataforma con el fin de garantizar su correcto
                funcionamiento.
                </p>

                <p>
                <strong>*Modificaciones de estos términos:</strong><br />
                Podemos actualizar los términos en cualquier momento para adaptarnos a cambios legales o
                mejoras del sistema. Notificaremos cambios importantes dentro de la plataforma. Si continúas
                usando el servicio después de una actualización, se considera que aceptas los nuevos términos.
                </p>

                <p>
                <strong>*Compromiso con la comunidad:</strong><br />
                En Lima en Vivo buscamos construir una comunidad creativa, segura y respetuosa. Tu
                colaboración es fundamental para mantener un ambiente sano y positivo para todos.
                </p>
            </div>
        </section>

  );
};

export default TYC;