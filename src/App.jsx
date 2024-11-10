// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Home} from './pages/Home/Home';
import Blog from "./pages/Blog/Blog";
import BlogPostPage from "./pages/BlogPostPage/BlogPostPage";
import './styles/global.scss';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="background">
        <div className="top-section" />
      </div>
      <NavBar />
      <div className="content-overlay">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
