import React from 'react';
import audios from '../../exports/audios';
import './Player.css';


const Player = () => {
  return(
    <div className='player'>
      <div className='list-container'>
      {audios.map(audio=> (
          <audio src={audio} key={audio} controls className="item" />
      ))}
      </div>
    </div>
  );
}


export default Player;
