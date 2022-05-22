import React from 'react'
import styles from '../../src/styles.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='nav-container'>
        <ul className='nav'>
            <div>
              <NavLink to='/'><li>Logo</li></NavLink>
            </div>
            <div>
                <NavLink to='/about'><li>About Developer</li></NavLink>
                <NavLink to='/behind-the-scenes'><li>Behind The Scenes</li></NavLink>
                <NavLink to='/dashboard'><li>Vocabulary List</li></NavLink>
            </div>
        </ul>
    </div>
  )
}
