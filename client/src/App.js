import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux related
import { Provider } from 'react-redux';
import store from './redux/store';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';
import { clearCurrentProfile } from './redux/actions/profileActions';

// MUI imports
// MUI imports
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

//comopnents
import AppLanding from './components/layout/AppLanding'
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/common/About';

import UserConfirm from './components/auth/UserConfirm';
import { checkAuth } from './utils/authPersist';

// Check for JWT for persistence
if (localStorage.jwtToken) {
  const decoded = checkAuth();
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());  
    // Redirect to login
    window.location.href = '/login';
  }
}

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 'auto',
    overflow: 'auto'
  },
  appBarSpacer: theme.mixins.toolbar,
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={ store }>
          <Router>
             <div className="App">
                 <CssBaseline />             
                  <AppNavbar />
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                      <Route exact path="/" component={AppLanding} />
                      <Route exact path="/Register" component={Register} /> 
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/about" component={About} />
                      <Route exact path='/confirm/:id' component={UserConfirm} />
                    </Switch> 
                  </main>                 
              </div>
            </Router>
      </Provider>
    )
  };
}

export default withStyles(styles)(App);
