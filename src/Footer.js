/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Footer.css';

function Footer({ owner }) {
  const date = new Date().getFullYear();
  return (
    <div className="Footer">
      <small>
        {owner} copyright {date}
      </small>
    </div>
  );
}

export default Footer;
