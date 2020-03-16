import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import TopNav from './components/TopNav';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="flexible-content">
          <TopNav />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

