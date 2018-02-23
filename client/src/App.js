import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Route path="/" component={IndexPage} />
      </div>
    );
  }
}

export default App;
