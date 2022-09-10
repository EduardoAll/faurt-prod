import React from 'react';
import './News.css';

const News = () => {
  return(
    <>
      <div className='news'>
        <h4 className='title'><i>Novedades</i></h4>
        <ul className='list'>
          <li>Incorporación de Equipo Visual próximamente...</li>
          <li>¡Consultar presupuesto por Ep y Disco!</li>
          <li>Última Producción: <a href='https://www.youtube.com/watch?v=RJEcpm_2zkU&ab_channel=ECHI' target='_blank' rel='noreferrer'>Amanecer - ECHI </a></li>
          <li>Ahora también, servicios de Composición, Instrumentación, ¡Registro de Obra! y más...</li>
        </ul>
      </div>
    </>
  );
}

export default News;
