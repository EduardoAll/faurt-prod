import React from 'react';
import './Works.css';
import Player from '../player/Player';
import vinilo from '../../media/vinilo.png';



const Works = () => {
  return(
    <>
      <div className='works' id='trabajos'>
        <h3 className='title'><i>Trabajos</i></h3>
        <div className='works-container'>
          <Player className='player-c' />
          <div className='titles-container'>
            <h5>Germán Rubino - Algoritmo <i className='worked'> Producción y Mezcla.</i></h5>
            <h5>Tiago Puntunet - Ocho y diagonal <i className='worked'> Producción y Mezcla.</i></h5>
            <h5>Germán Rubino - Como la luna <i className='worked'> Producción, Grabación y Mezcla.</i></h5>
            <h5>Fer Pelli - Poemas <i className='worked'> Producción, Grabación y Mezcla.</i></h5>
            <h5>Chainase & Pelle - Tapada <i className='worked'> Producción, Grabación y Mezcla.</i></h5>
            <h5>Faurt - L-Gante(remix) <i className='worked'> Grabación de beat, Mezcla y Mastering.</i></h5>
            <h5>Ezequiel Faurt - El lugar <i className='worked'> Producción, Composición, Voz.</i></h5>
            <h5>Ezequiel Faurt - Siempre igual <i className='worked'> Composición y Grabación.</i></h5>
            <h5>Tiago Puntunet - Achinando <i className='worked'> Mezcla y Mastering.</i></h5>
            <h5>Naos - No girl <i className='worked'> Grabación de Voces y Postproducción.</i></h5>
            <h5>Ezequiel Faurt - Jaque Mate <i className='worked'> Composición y Grabación.</i></h5>
            <h5>Fran Eizaguirre - Ya no hay mas nada que hablar <i className='worked'> Grabación, Mezcla y Mastering.</i></h5>
          </div>
          <img src={vinilo} alt='' className='vinilo' />
        </div>
      </div>
    </>
  );
}

export default Works;
