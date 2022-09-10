import React from 'react';
import './Services.css';


const Services = () => {
  return(
    <div className='services' id='servicios'>
      <h2 className='title'><i>Servicios </i></h2>
      <div className='packs'>
        <div className='item1'>
          <h4><u>Paquete 1:</u></h4>
          <p>A domicilio con Estudio móvil.</p>
          <ul className='list'>
            <li>Producción.</li>
            <li>Grabación.</li>
            <li>Mezcla.</li>
            <li>Master.</li>
          </ul>
          <h5 className=''>$7.000 por canción.</h5>
        </div>
        <div className='item2'>
          <h4><u>Paquete 2:</u></h4>
          <p>Online, producción a distancia (por zoom).</p>
          <ul className='list'>
            <li>Producción.</li>
            <li>Grabación.</li>
            <li>Mezcla.</li>
            <li>Master.</li>
          </ul>
          <h5 className=''>$8.000 por canción.</h5>
        </div>
        <div className='item3'>
          <h4><u>Paquete 3:</u></h4>
          <p>En Estudio profesional de grabación Paese (La Plata).</p>
          <ul className='list'>
            <li>Producción.</li>
            <li>Grabación.</li>
            <li>Mezcla.</li>
            <li>Master.</li>
            <li>Paquete horas en Estudio.</li>
          </ul>
          <h5 className=''>$12.000 por canción.</h5>
        </div>
      </div>
      <div className='info'>
        <p className='text'> Mi tarea como productor musical es intentar convertir tu idea (💡) en una canción. Este proceso va a estar dividido en tres grandes etapas: La preproducción, donde a través del <i>"arreglo musical"</i> vamos a elaborar la maqueta de la canción basados en los gustos e intereses del cliente.
La segunda etapa va a ser la producción. En la misma va a entrar la <i>"mezcla"</i> y la <i>"producción"</i> donde vamos a lograr el sonido deseado de cada instrumento de manera equilibrada y armónica en la totalidad de la canción. Finalmente, concluimos en la <i>"postproducción"</i> donde vamos a trabajar la <i>"masterización"</i>. Es el proceso final de una canción donde mediante la ecualización, compresión, etc, se logra un nivel óptimo del audio.
        </p>
      </div>
    </div>
  );
}


export default Services;
