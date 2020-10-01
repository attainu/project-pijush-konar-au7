import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import ProgressSpinner from '../common/ProgressSpinner';
import ProfileAbout from './ProfileAbout';

// Redux imports
import { getProfileByHandle } from '../../redux/actions/profileActions';
import { connect } from 'react-redux';

class Profile extends Component {

componentDidMount() {
    if (this.props.match.params.handle) {
        this.props.getProfileByHandle(this.props.match.params.handle);
    }
}

// componentDidUpdate(prevProps) { 
//     if (prevProps.profile.profile === null && this.props.profile.loading) {
//         this.props.history.push('/not-found');
//     }
// }
// static getDerivedStateFromProps(nextProps,prevState) {
//     if (nextProps.profile.profile === null && this.props.profile.loading) {
//         this.props.history.push('/not-found');
//     }
// }

UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
        this.props.history.push('/not-found');
    }
}

render() {
    const { profile, loading } = this.props.profile;
    // const proload = this.props
    // const profile = proload.profile? proload.profile.profile: "";
    // const loading = proload.profile? proload.profile.loading: "";
    let profileContent;
    
    profileContent = (profile === null || loading) ? <ProgressSpinner /> : (
        <div>
            <ProfileAbout profile={{profile}}/>
        </div>
    );

    return (
        <div>{profileContent}</div>
    );
  }
}

Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    // profile: PropTypes.array.isRequired
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
