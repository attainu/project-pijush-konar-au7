import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
      minWidth: 300,
      margin: 100
    }
});

class Dashboard extends Component {
    render() {
        const { user } = this.props.auth;

        return (
            <React.Fragment>
                <Typography variant="h4" component="h1" align="center">
                    Welcome, {user.firstname}!
                </Typography>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));