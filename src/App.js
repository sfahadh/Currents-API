import React from 'react';
import Navbar from './components/navbar/navbar'
import SearchNews from './components/news/searchNews'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchNews />
    </div>
  );
}

export default App;
