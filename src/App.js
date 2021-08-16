import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>

      </BrowserRouter>
    )
  }

}

export default App;
