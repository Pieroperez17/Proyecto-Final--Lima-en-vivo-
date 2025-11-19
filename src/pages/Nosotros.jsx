import React from 'react';
import './styles/Nosotros.css';

const Nosotros = () => {
  const teamMembers = [
    { 
      name: 'Fabricio Espag',
      link: 'https://www.linkedin.com/in/fespag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      imageprofile: 'https://media.licdn.com/dms/image/v2/D4D03AQE5ddifATDTxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726868439181?e=1765411200&v=beta&t=G1JIbfwlKKPBA2tz2OkyIxJgqjL49RDy1PxsFqpFlFA'
    },
    { 
      name: 'Gianfranco Navarro',
      link: 'https://www.linkedin.com/in/gianfranco-navarro-hernandez-b76188329/',
      imageprofile: 'https://media.licdn.com/dms/image/v2/D4E03AQGzO_3vMIew6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726367090536?e=1765411200&v=beta&t=HluUEEN8XORpq-_jofUyWtK1bpUkS-8bTS9F61Gs4jM'
    },
    { 
      name: 'Sergio Montalvan',
      link: 'https://www.linkedin.com/in/sergio-montalvan-choquehuanca-ab9b60325/',
      imageprofile: 'https://media.licdn.com/dms/image/v2/D4D35AQEmlVkv84V4HQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726282861527?e=1764140400&v=beta&t=kgU47OFzUndExPH2W00QrlgmgNr7V1bncv1nHxzGwQ4'
    },
    { 
      name: 'Rolando Gustavo',
      link: 'https://www.linkedin.com/in/rolando-gustavo-deudor-fernandez-02b963205/',
      imageprofile: 'https://media.licdn.com/dms/image/v2/C4E03AQHBXQ2XgEijcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1612355603296?e=1765411200&v=beta&t=KmkmLsXeTTarAreNyo6SkbDKaoXJTYNH3hHxgDJ_d2A'
    },
    {
      name: 'Auro Garcia',
      link: 'https://www.linkedin.com/in/auro-garcia-castro-051177324',
      imageprofile: 'https://media.licdn.com/dms/image/v2/D5603AQHCpaK_mO2HcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725172971270?e=1765411200&v=beta&t=VSuGBEmPVnSWX3yfu3lNjKQpOB17FR2Mfdl2W1-CuTI'
    },
    {
      name: 'Sebastian Piero Perez',
      link: 'https://www.linkedin.com/in/piero-perez-a62091300/',
      imageprofile: 'https://media.licdn.com/dms/image/v2/D4E03AQEt9P5azZnP8w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711135401578?e=1765411200&v=beta&t=Oic845mFCfK18PMlBc9ZxN0Ys7z4A6hulkNCmENF9Qo'
    }
  ];

  return (
    <div className="nosotros-container">
      <br />
      <br />
      <br />
      <h1 className="nosotros-title">Nosotros</h1>

      <div className="nosotros-description">
        <p>
          Bienvenidos a la página de Nosotros. Aquí podrás conocer más sobre el equipo que hace posible este proyecto
          y la visión que nos impulsa a seguir creciendo cada día.
          <br /><br />
          <strong>Lima en Vivo</strong> es una plataforma de streaming creada como una alternativa moderna y accesible
          para que cualquier persona pueda transmitir contenido en tiempo real desde cualquier parte del Perú. 
          Nuestro objetivo es abrir un espacio en el que creadores, aficionados y nuevos talentos puedan conectar 
          con su audiencia de manera auténtica y dinámica.
          <br /><br />
          Ya sean transmisiones desde las calles de la ciudad, partidas de videojuegos, conversaciones entre amigos
          o contenido creativo, buscamos que cada usuario tenga la libertad de expresarse y contribuir a una comunidad 
          en constante crecimiento. Queremos construir un lugar donde la creatividad, la pasión y la interacción 
          se junten para formar experiencias únicas y reales.
          <br /><br />
          Cada miembro de nuestro equipo trabaja con dedicación para mejorar la plataforma, ofrecer nuevas funciones
          y mantener un entorno seguro, divertido y pensado para ti. Gracias por acompañarnos en esta aventura:
          juntos estamos dando vida a una nueva forma de conectar con el Perú y con el mundo.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            
            <img 
              src={member.imageprofile} 
              alt={member.name} 
              className="member-image"
            />

            <h3 className="member-name">{member.name}</h3>

            <p className="member-link">
              <a href={member.link} target="_blank" rel="noopener noreferrer">
                .:LinkedIn:.
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
