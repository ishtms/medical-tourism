import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import AddHospital from './components/AddHospital';
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
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/add" component={AddHospital} />
      </div>
    );
  }
}

export default App;
