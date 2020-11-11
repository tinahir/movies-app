import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import Layout from './components/Layout';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
