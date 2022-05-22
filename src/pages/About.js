import React from 'react'
import styles from '../../src/styles.css';


export default function About() {
  return (
    <div>
        <h1 className='title'>About</h1>
        <div className="flex-row about-container">
          <div className='img'>
          <img src="https://avatars.githubusercontent.com/u/41702570?v=4" alt="suitcase coder logo" />
          </div>
          <div>
            <h3>Hi! I'm Laura</h3> 
            <p>I'm a software developer with a focus on front-end development. I've been teaching software development for quite some time and I like working on side projects to keep up with my React skills. I also have a podcast and youtube channel where I LOVE sharing helpful tips and tricks.</p>
            <div>
              <h4>A few things I learned with this project:</h4>
              <ul className='flex-row'>
                <li>React-Router 6</li>
                <li>using React Fragments</li>
                <li>one Form handling input fields for both add and edit</li>
                <li>better project structuring</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
