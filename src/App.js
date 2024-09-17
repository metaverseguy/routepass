import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/MainPage';
import { Search } from './component/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
