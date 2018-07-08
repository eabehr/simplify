  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

  import {Link} from 'react-router-dom';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the Simplify App!</h1>
          </header>


          <br/><br/>
          <Link to={"/request-list/"} className="btn btn-primary">View Requests</Link>
          <br/><br/>
          <Link to={"/request/"} className="btn btn-primary">Create New Request</Link>
          


        </div>
      );
    }
  }

  export default App;
