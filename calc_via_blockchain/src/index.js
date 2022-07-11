import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Calc from './pages/Calculator';
import Deployform from './pages/Deploy_form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/calc' element={<Calc />} />
      <Route path='/formular' element={<Deployform />} />
    </Routes>
  </BrowserRouter>
);
