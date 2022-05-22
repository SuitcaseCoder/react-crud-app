import React from 'react'
// import styles from '../../src/styles.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='nav-container'>
        <ul className='nav'>
            <div>
              <NavLink to='/'><li className='navlinks'>Home</li></NavLink>
            </div>
            <div>
                <NavLink to='/about'><li className='navlinks'>About</li></NavLink>
                {/* <NavLink to='/behind-the-scenes'><li className='navlinks'>BTS</li></NavLink> */}
                <NavLink to='/vocablist'><li className='navlinks'>Vocabulary List</li></NavLink>
                <NavLink to='/add-word'><li className='navlinks'>Add Word</li></NavLink>
            </div>
        </ul>
    </div>
  )
}
