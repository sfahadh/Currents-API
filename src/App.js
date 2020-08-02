import React from 'react';
import NavigationBar from './components/navbar/navigationBar'
import Home from './components/home/searchbar'
import LatestNews from './components/news/latestNews/latestNews'
import { Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
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
