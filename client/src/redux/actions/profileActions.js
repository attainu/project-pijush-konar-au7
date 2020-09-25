import axios from 'axios';
import { 
    GET_PROFILE, 
    GET_PROFILES,
    PROFILE_LOADING, 
    GET_ERRORS, 
    CLEAR_CURRENT_PROFILE, 
    SET_CURRENT_USER 
} 
from './types';
import { API_URL } from '../../client-config'

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`${API_URL}/api/profile`)
        .then(res => 
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
}

export const getProfileByHandle = handle => dispatch => {
    dispatch(setProfileLoading());
    axios
      .get(`${API_URL}/api/profile/handle/${handle}`)
      .then(res =>
        dispatch({
          type: GET_PROFILE,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILE,
          payload: null
        })
      );
};

export const createProfile = (profileData, history) => dispatch => {
    axios.post(`${API_URL}/api/profile`, profileData)
        .then(res => history.push('/profile'))
        .catch(err => console.error(err));
}

// Get all profiles (only enabled profiles)
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`${API_URL}/api/profile/all`)
    .then(res => {
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: null
        })
    });
}

export const disableProfileByUser = (userId) => dispatch => {
    axios.post(`${API_URL}/api/profile/disableProfile`, { userId: userId })
    .catch(err => console.error(err));
}

export const enableProfileByUser = (userId) => dispatch => {
    axios.post(`${API_URL}/api/profile/enableProfile`, { userId: userId })
    .catch(err => console.error(err));
}

export const getProfileByName = name => dispatch => {
    axios.get(`${API_URL}/api/profile/search/${name}`)
    .then(res => {
        dispatch({
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            payload: null
        })
    });
}

// Delete account & profile
export const deleteAccount = () => dispatch => {
      axios.delete(`${API_URL}/api/profile`)
        .then(res =>
          dispatch({
            type: SET_CURRENT_USER,
            payload: {}
          })
        )
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
        );
}

export const deleteAccountByAdmin = (id) => dispatch => {
    axios.delete(`${API_URL}/api/profile/id`, {data: { id: id }})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
}

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
}

// ADMIN: Get all enabled and disabled profiles
export const getAllProfilesByAdmin = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`${API_URL}/api/profile/allUsers`)
    .then(res => {
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: null
        })
    });
}

// ADMIN: Create or update a course
export const postCourse = courseData => dispatch => {
    axios.post(`${API_URL}/api/courses`, courseData)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err));
}