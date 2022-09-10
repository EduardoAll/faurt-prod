import React from 'react';
import './About.css';
import eze from '../../media/eze.png';




const About = () => {
  return(
    <div className='about-container' id='bio'>
      <img src={eze} alt='' className='foto-png' />
      <div className='about-desc'>
        <h3 className='titulo'><i>Sobre mí</i></h3>
        <p>¡Hola! Me llamo Ezequiel Faurt, soy un productor, compositor y arreglista con casi 10 años de experiencia. Mis producciones abarcan distintos ámbitos, desde la comedia musical, hasta producciones de varios artistas de distintos géneros musicales.
Estudié producción musical en <i>Think Audio</i>, música en el <i>Conservatorio Luis Gianneo</i> y en el <i>Instituto de Profesorado de Arte Adolfo Abalos</i> en Mar del Plata, para luego expandir mis conocimientos en La Plata y Buenos Aires.
Actualmente me encuentro grabando producciones de artistas independientes mientras estudio <b>Licenciatura en Música</b> y <b>Tecnicatura Universitaria en Sonido y Grabación</b> en la <i>UNLP.</i></p>
      </div>
    </div>
  );
}

export default About;
