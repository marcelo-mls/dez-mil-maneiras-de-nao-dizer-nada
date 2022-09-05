import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const myLinks = {
    urlLinkedIn: 'https://www.linkedin.com/in/marcelo-mls/',
    urlGithub: 'https://github.com/marcelo-mls',
    urlNintendo: 'https://www.naointendo.com.br/posts/10-mil-modo-de-nao-dizer-absolutamente-nada',
    urlNintendoImage: 'https://www.naointendo.com.br/assets/packs/nao-intendo/assets/nao-intendo-ac355798ff0ff1f2b794ff42435e9e4d.png',
  };

  return (
    <footer
      style={ {
        fontSize: '0.8em',
        fontWeight: '700',
        padding: '8px 0',
        backgroundColor: '#091520',
        color: 'white',
      } }
    >
      Aplicação baseada no meme do site
      {' '}
      <a href={ myLinks.urlNintendo } target="_blank" rel="noreferrer">
        <img
          style={ { width: '60px' } }
          src={ myLinks.urlNintendoImage }
          alt="Logo do site Ñintendo"
        />
      </a>
      . Desenvolvido em React por Marcelo Marques

      <a href={ myLinks.urlLinkedIn } target="_blank" rel="noreferrer">
        <FaLinkedin style={ { fontSize: '16px', padding: '0 4px 0 8px' } } />
      </a>
      <a href={ myLinks.urlGithub } target="_blank" rel="noreferrer">
        <FaGithub style={ { fontSize: '16px', padding: '0 8px 0 4px' } } />
      </a>

    </footer>
  );
}

export default Footer;
