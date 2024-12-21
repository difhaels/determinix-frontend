import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login';

import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Articles from './pages/Articles';
import Activities from './pages/Activities';
import About from './pages/About';

import ShowcaseDetail from './components/ShowcaseDetail';
import ActivityDetail from './components/ActivityDetail';
import ArticleDetail from './components/ArticleDetail';
import MemberDetail from './components/MemberDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/login' element={<Login/>}/>

        <Route path='/showcase' element={<Showcase/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path="/showcase/:id" element={<ShowcaseDetail />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/article/:id" element={<ArticleDetail />} />

        <Route path="/member/:id" element={<MemberDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
