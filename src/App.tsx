import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './pages/Lista';
import Detalle from './pages/Detalle';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/detalle/:albumId" element={<Detalle />} />
      </Routes>
    </Router>
  );
};

export default App;

