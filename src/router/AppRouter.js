import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import About from '../pages/About';
import BTS from '../pages/BTS';
import Dashboard from '../pages/Dashboard';
import Form from '../components/Form';
import AddWord from '../components/AddWord';
import VocabList from '../components/VocabList';
import Navbar from '../components/Navbar';
import Splash from '../pages/Splash';
import EditWord from '../components/EditWord';
import Footer from '../components/Footer';

const AppRouter = () => {
  const [words, setWords] = useLocalStorage('words', []);

    return(
    <BrowserRouter>
    <div>
        <Navbar />
    <div>
    <Routes>
      <Route path="/" element={<Splash />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/behind-the-scenes" element={<BTS />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route 
        path="/add-word" 
        element={<AddWord words={words} setWords={setWords}/>}
      ></Route>
      <Route 
        path="/vocablist" 
        element={<VocabList words={words} setWords={setWords} />}
      ></Route>
      <Route
        path="/edit-word/:id"
        element={<EditWord words={words} setWords={setWords}/>}
      ></Route>
    </Routes>
    </div>
    </div>
    <div>
      <Footer />
    </div>
    </BrowserRouter>
    )
}

export default AppRouter;