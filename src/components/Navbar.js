import React from 'react'
import styles from '../../src/styles.css';

export default function Navbar() {
  return (
    <div className='nav-container'>
        <ul className='nav'>
            <div>
                <li>Logo</li>
            </div>
            <div>
                <li>About Developer</li>
                <li>What's going on</li>
            </div>
        </ul>
    </div>
  )
}
