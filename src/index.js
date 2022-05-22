import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router/AppRouter';
// import About from './pages/About';
// import BTS from './pages/BTS';
// import Dashboard from './pages/Dashboard';
// import Form from '../src/components/Form';
// import AddWord from './components/AddWord';
// import VocabList from './components/VocabList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/behind-the-scenes" element={<BTS />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/add-word" element={<AddWord />}></Route>
      <Route path="/vocablist" element={<VocabList />}></Route>
    </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
