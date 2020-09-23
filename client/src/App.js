<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux related
import { Provider } from 'react-redux';
import store from './redux/store';

//comopnents
import Register from './components/auth/Register';

class App extends Component {
  render() {
    
    return (
      <Provider store={ store }>
             <div className="App">
                <Router>
                  <Switch>
                    <Route exact path="/" component={Register} /> 
                  </Switch>  
                </Router>
             </div>
      </Provider>
    )
  };
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> cc2c40cdeae7b5f398e9c7703167c039e9983b0a
}

export default App;
