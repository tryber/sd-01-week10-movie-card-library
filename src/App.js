import React from 'react';
import './App.css';
import data from './data'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div className='App'>
      <Header />
      <MovieList />
      <MovieCard movies = {data} />
    </div>
  );
}

export default App;
