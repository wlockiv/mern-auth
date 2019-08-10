import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request of logged in
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete the header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
