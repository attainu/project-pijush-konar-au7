import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Redux related
import { Provider } from 'react-redux';
import store from './redux/store';

// MUI imports
import withStyles from '@material-ui/core/styles/withStyles';

//comopnents
import AppLanding from './components/layout/AppLanding'
import AppNavbar from './components/layout/AppNavbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AppLanding from './components/layout/AppLanding';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
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
             <div className="App">
                <Router>
                  <AppNavbar />
                  <main className={classes.content}/>
                    <div className={classes.appBarSpacer} />
                    <Switch>
                      <Route exact path="/" component={AppLanding} />
                      <Route exact path="/Register" component={Register} /> 
                      <Route exact path="/login" component={Login} />
                    </Switch>  
                </Router>
             </div>
      </Provider>
    )
  };
}

export default withStyles(styles)(App);
