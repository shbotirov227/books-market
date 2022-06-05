import React from 'react';
import { Link } from 'react-router-dom';

import "./FooterLinks.scss";

const FooterLinks = ({ title, link }) => {
  return (
    <div className="FooterLinks">
        <h4 className="FooterLinks-title">{title}</h4>
        {link.map(el => <Link className="FooterLinks-link" to="/">{el}</Link>)}
    </div>
  )
}

export default FooterLinks;