import React from 'react';
import cover from '../../media/eze-portada.jpg';
import './Cover.css';


const Cover = () => {
  return(
    <>
      <div className='cover-container'>
        <img src={cover} alt='' className='cover'/>
      </div>
    </>
  );
}

export default Cover;
