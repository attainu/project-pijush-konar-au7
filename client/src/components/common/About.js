import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import image from '../../images/about-bg.png';
import imageV from '../../images/about-bg-v.png';
import '../profile/profile.css';


import { withStyles } from '@material-ui/core/styles';

const Copyright = () => {
    return (
      <Typography variant="body2" gutterBottom className="about-text" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          GuruKul
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const Developed = () => {
    return (
      <Typography variant="body2" className="about-text" align="center">
        {'Developed with ❤ by '}
        <Link color="inherit" href="https://github.com/pijush-konar-au7">
          Pijush Konar
        </Link>{' & '}
        <Link color="inherit" href="https://github.com/saidul-mondal-au7">
          Saidul Mondal
        </Link>{'.'}
      </Typography>
    );
  }

const styles = theme => ({
     media: {
        objectFit: 'cover',
   },
});

class About extends Component {

    render() {
        return (
            <div>
              <div id="bg">
                <img src={image} id="image-h" alt="" />
                <img src={imageV} id="image-v" alt="" />
              </div>
              <div className="about padding20">
                    <Grid container spacing={16}>
                     <Grid item xs={12}>
                      <Typography variant="h3" align="center" className="about-title" id="lg-header">
                        A Peer To Peer Educational Website.
                      </Typography>
                      <Typography variant="h5" align="center" className="about-title" id="sm-header">
                        A Peer To Peer Educational Website.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Accessibility.    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        GuruKul was created with accessibility in mind. Our goal is to make academic aid more accessible for students of all majors.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Simplicity.
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                       Simply register with email to access the GuruKul search page!
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h5" className="about-title" gutterBottom>
                        Diversity.    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        This online platform allows students to find Gurus/Teachers with a more diverse range of subjects than is offered through on-campus programs.
                      </Typography>
                    </Grid>
                     <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" className="about-text" gutterBottom>
                        Frequently Asked Questions
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        Is GuruKul Paid?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        No all subjects are not paid, many are free. In order to use GuruKul, you will need to create an account.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        Why do I have to confirm my email address?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        In order to protect the information of our Gurus, we want to make sure only authentic people can access the site.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Typography variant="h6" className="about-text" gutterBottom>
                        What information do I have to provide as a Guru?    
                      </Typography>
                      <Typography variant="subtitle1" className="about-text">
                        You will be asked to provide your field of study, a brief bio, your availability, if you want to be paid or are volunteering and what courses you can teach.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider variant="middle" className="about-line"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={12}>
                            <Copyright />
                        </Box>
                        <Box>
                            <Developed />
                        </Box>
                    </Grid>
                  </Grid>
              </div>
            </div>
        );    
  }
}

About.propTypes = {
    classes: PropTypes.object.isRequired    
}

export default (withStyles(styles)(About));
