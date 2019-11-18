import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Movie from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Movie} />
    </div>
  );
}

export default App;
