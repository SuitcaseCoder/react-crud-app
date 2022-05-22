import React from 'react'
import styles from '../../src/styles.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='nav-container'>
        <ul className='nav'>
            <div>
              <NavLink to='/'><li className='navlinks'>Logo</li></NavLink>
            </div>
            <div>
                <NavLink to='/about'><li className='navlinks'>About Developer</li></NavLink>
                <NavLink to='/behind-the-scenes'><li className='navlinks'>Behind The Scenes</li></NavLink>
                <NavLink to='/dashboard'><li className='navlinks'>Vocabulary List</li></NavLink>
                <NavLink to='/add-word'><li className='navlinks'>Add Word</li></NavLink>
                <NavLink to='/form'><li className='navlinks'>Form</li></NavLink>
                {/* <NavLink to='/dashboard'><li>Vocabulary List</li></NavLink> */}


            </div>
        </ul>
    </div>
  )
}
