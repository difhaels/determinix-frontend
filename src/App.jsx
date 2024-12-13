import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Articles from './pages/Articles';
import Activities from './pages/Activities';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
