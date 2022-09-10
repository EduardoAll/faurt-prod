import React from 'react';
import './Footer.css';
import yt from '../../media/yt.png';
import wpp from '../../media/wpp.png';
import face from '../../media/face.png';
import insta from '../../media/insta.png';



const Footer = () => {
  return(
    <footer className='footer'>
      <div className='redes'>
        <a href='https://wa.me/+542235163990?' target='_blank' rel='noreferrer'>
          <img src={wpp} alt='' className='wpp' />
        </a>
        <a href='https://www.instagram.com/eze_echi_f/' target='_blank' rel='noreferrer'>
          <img src={insta} alt='' className='insta' />
        </a>
        <a href='https://www.facebook.com/EzeFaurt' target='_blank' rel='noreferrer'>
          <img src={face} alt='' className='face' />
        </a>
        <a href='https://www.youtube.com/c/ECHIFAURT' target='_blank' rel='noreferrer'>
          <img src={yt} alt='' className='yt' />
        </a>
      </div>
    </footer>
  );
}



export default Footer;
