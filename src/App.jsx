import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Nothing from "./components/Nothing";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Articles from "./pages/Articles";
import Activities from "./pages/Activities";
import About from "./pages/About";

import ShowcaseDetail from "./components/ShowcaseDetail";
import ActivityDetail from "./components/ActivityDetail";
import ArticleDetail from "./components/ArticleDetail";
import MemberDetail from "./components/MemberDetail";
import MemberShowcase from "./components/MemberShowcase";
import MemberArticle from "./components/MemberArticle";

import Dashboard from "./admin/Dashboard";
import Project from "./admin/project/Project";
import Activity from "./admin/activity/Activity";
import AddProject from "./admin/project/AddProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/showcase" element={<Showcase />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />

        <Route path="/showcase/:id" element={<ShowcaseDetail />} />
        <Route path="/activity/:id" element={<ActivityDetail />} />
        <Route path="/article/:id" element={<ArticleDetail />} />

        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/members/:id/showcase" element={<MemberShowcase />} />
        <Route path="/members/:id/article" element={<MemberArticle />} />

        {/* CMS Route */}
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/dashboard/project" element={<ProtectedRoute><Project /></ProtectedRoute>} />
        <Route path="/add-project" element={<ProtectedRoute><AddProject /></ProtectedRoute>} /> 

        <Route path="/dashboard/activity" element={<ProtectedRoute><Activity /></ProtectedRoute>} />

        <Route
          path="/server-down"
          element={
            <Nothing what={"Server Is Down "} desc={"Please Comeback Later"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
