import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux related
import { Provider } from 'react-redux';
import store from './redux/store';

//comopnents
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

class App extends Component {
  render() {
    
    return (
      <Provider store={ store }>
             <div className="App">
                <Router>
                <AppNavbar />
                  <Switch>
                    <Route exact path="/register" component={Register} /> 
                    <Route exact path="/login" component={Login} /> 
                  </Switch>  
                </Router>
             </div>
      </Provider>
    )
  };
}

export default App;
