import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Articles from './pages/Articles';
import Activities from './pages/Activities';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
