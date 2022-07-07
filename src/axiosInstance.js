import axios from "axios";
// Set config defaults when creating the instance
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
