import React from 'react'
import './NavBar.scss';
import {Link} from 'react-router-dom';
export default function NavBar() {
  return (
   <header>
      <ul className="listItems">
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/Ecrire">Ecrire</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
   </header>
  );
}
