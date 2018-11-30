import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import UserSection from './components/UserSection/UserSection';
import TestHomePage from './components/TestHomePage/TestHomePage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      
      if(user) {
        this.setState({user});
      }
      else{
        this.setState({user: null});
      }

    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (<UserSection />) : (<Login />)}
      </div>
    );
  }
}

export default App;
