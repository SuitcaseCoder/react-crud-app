import React from 'react'
import styles from '../../src/styles.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav-container'>
        <ul className='nav'>
            <div>
              <Link to='/'><li>Logo</li></Link>
            </div>
            <div>
                <Link to='/about'><li>About Developer</li></Link>
                <Link to='/behind-the-scenes'><li>Behind The Scenes</li></Link>
            </div>
        </ul>
    </div>
  )
}
