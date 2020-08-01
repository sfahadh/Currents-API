import React from 'react';
import Navbar from './components/navbar/navbar'
import LatestNews from './components/news/latestNews'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LatestNews />
    </div>
  );
}

export default App;
