import React from 'react';
import Navbar from './components/navbar/navbar'
import Home from './components/home/searchbar'
import LatestNews from './components/news/latestNews/latestNews'
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="align">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/latestNews">
            <LatestNews />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
