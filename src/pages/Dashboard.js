import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import VocabList from '../components/VocabList'

export default function Dashboard() {
  return (
    <div>
        Dashboard
        <Navbar />
        <Link to='/add-word'>Add Vocab Word</Link>
        <VocabList />
    </div>
  )
}

