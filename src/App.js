import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import './App.css';
import Header from './components/includes/header';
import Home from "./components/Home"
import CategoryNews from "./components/CategoryNews"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/c/:category" component={CategoryNews} />
          <Route path="/" component={Home}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
