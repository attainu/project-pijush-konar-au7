import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressSpinner from '../common/ProgressSpinner';

import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount, disableProfileByUser, enableProfileByUser } from '../../redux/actions/profileActions';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import EditProfileImg from '../../images/edit-profile.jpg';
import DeleteAccountImg from '../../images/delete-account.jpg';
import EnableProfileImg from '../../images/enable-profile.jpg';
import DisableProfileImg from '../../images/disable-profile.jpg';
import ViewProfileImg from '../../images/view-profile.jpg';
import FindGuruImg from '../../images/find-guru.jpg';
import BecomeGuruImg from '../../images/become-guru.jpg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
});

class Dashboard extends Component {
    componentDidMount() {
        const { profile } = this.props;
        if (Object.keys(profile).length > 0 ) this.props.getCurrentProfile();
        this.setState({ disabled: profile.disabled });
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        const { classes } = this.props;
        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <ProgressSpinner />
        }
        else {
            dashboardContent = Object.keys(profile).length > 0 ? (
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/edit-profile'}>
                                <CardMedia
                                  component="img"
                                  alt="edit profile"
                                  className={classes.media}
                                  height="140"
                                  image={EditProfileImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={`/profile/${profile.handle}`}>
                                <CardMedia
                                  component="img"
                                  alt="view profile"
                                  className={classes.media}
                                  height="140"
                                  image={ViewProfileImg}
                                />
                            </CardActionArea>
                          </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/profiles'}>
                                <CardMedia
                                  component="img"
                                  alt="find a guru"
                                  className={classes.media}
                                  height="140"
                                  image={FindGuruImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea onClick={this.onDeleteClick}>
                                <CardMedia
                                  component="img"
                                  alt="delete account"
                                  className={classes.media}
                                  height="140"
                                  image={DeleteAccountImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* show this if profile is dis/en -abled */}
                    {this.state.disabled ? (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={styles.card}>
                                <CardActionArea onClick={e => this.onProfileSettingClick(e, 'enable')}>
                                    <CardMedia
                                    component="img"
                                    alt="enable account"
                                    className={classes.media}
                                    height="140"
                                    image={EnableProfileImg}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ) : (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={styles.card}>
                                <CardActionArea onClick={e => this.onProfileSettingClick(e, 'disable')}>
                                    <CardMedia
                                        component="img"
                                        alt="disable account"
                                        className={classes.media}
                                        height="140"
                                        image={DisableProfileImg}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        )
                    }
                </Grid>
            ) : (
                <Grid container spacing={6} justify="center">
                    <Grid item xs={3} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/create-profile'}>
                                <CardMedia
                                  component="img"
                                  alt="become a guru"
                                  className={classes.media}
                                  height="140"
                                  image={BecomeGuruImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/profiles'}>
                                <CardMedia
                                  component="img"
                                  alt="find a guru"
                                  className={classes.media}
                                  height="140"
                                  image={FindGuruImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            );
        }

        return (
            <React.Fragment>
           
            <div>
            </div>
                <div className="padding20">
                <Typography variant="h4" component="h1" align="center" className="editHeading">
                Welcome, {user.firstname}!
                </Typography>
                    <br/>
                    {dashboardContent}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, disableProfileByUser, enableProfileByUser })(withStyles(styles)(Dashboard));
