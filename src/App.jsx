import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Articles from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
