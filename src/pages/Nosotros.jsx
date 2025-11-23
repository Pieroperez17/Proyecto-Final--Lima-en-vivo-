import React from 'react';

import './styles/nosotros.css';



const Nosotros = () => {

    const teamMembers = [
      {
          name: 'Fabricio Espag',
          link: 'https://www.linkedin.com/in/fespag',
          imageprofile: 'src/assets/integrante1.jpg'
      },
      {
          name: 'Gianfranco Navarro',
          link: 'https://www.linkedin.com/in/gianfranco-navarro-hernandez-b76188329/',
          imageprofile: 'src/assets/integrante2.jpg'
      },
      {
          name: 'Sergio Montalvan',
          link: 'https://www.linkedin.com/in/sergio-montalvan-choquehuanca-ab9b60325/',
          imageprofile: 'src/assets/integrante3.jpg'
      },
      {
          name: 'Rolando Gustavo',
          link: 'https://www.linkedin.com/in/rolando-gustavo-deudor-fernandez-02b963205/',
          imageprofile: 'src/assets/integrante4.jpg'
      },
      {
          name: 'Auro Garcia',
          link: 'https://www.linkedin.com/in/auro-garcia-castro-051177324',
          imageprofile: 'src/assets/integrante5.jpg'
      },
      {
          name: 'Sebastian Piero Perez',
          link: 'https://www.linkedin.com/in/piero-perez-a62091300/',
          imageprofile: 'src/assets/integrante6.jpg'
      }
    ];



    return (

    <div className="nosotros-container"  style={{ paddingTop: '4rem' }}>
        <h1 className="nosotros-title">Nosotros</h1>
        <div className="nosotros-description">
            <p>Bienvenidos a la página de Nosotros. Aquí puedes conocer más sobre nuestro equipo y misión.</p>
        <p>
          Lima en Vivo nació es una plataforma de streaming que nació como una alternativa para que personas puedan iniciar directos e interactuar con sus
          seguidores dentro del Perú. Ya sea enfocado en hacer Lives en la ciudad, jugar Dota o
          simplemente charlar estos pueden estar pasando en cualquier parte del país.
        </p>
      </div>



      <h2 className="team-title">Nuestro Equipo</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imageprofile} alt={member.name} className="member-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-link">
              <a href={member.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        ))}
      </div>



      <div className="terms-section">
        <h2 className="terms-title">Términos y Condiciones</h2>
        <div className="terms-content">
          <p>
            Todo el contenido que transmitas debe cumplir con nuestras normas comunitarias. No se permite contenido
            que sea ilegal, que promueva violencia, acoso, discriminación o que infrinja derechos de autor.
            Nos reservamos el derecho de suspender o eliminar cuentas que violen estas reglas.
          </p>
          <p>
            Al usar Lima en Vivo, aceptas estos términos. Debes tener al menos 13 años para usar la plataforma.
            Eres responsable de mantener la seguridad de tu cuenta y de toda la actividad que ocurra en ella.
          </p>
          <p>
            El contenido que crees te pertenece, pero nos otorgas permiso para transmitirlo, almacenarlo y
            distribuirlo en nuestra plataforma. Podemos modificar estos términos en cualquier momento,
            y tu uso continuo de la plataforma implica la aceptación de dichos cambios.
          </p>
        </div>
      </div>
    </div>

  );

};



export default Nosotros;

