import Axios from 'axios';

//CREATE AXIOS INSTANCE
function returnAxiosInstance(accessToken) {

  return Axios.create({
    baseURL: 'https://api.23forobi.com/',
    headers: {
      'Content-Type': 'application/json',
    },
    validateStatus(status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
}

//GET REQUEST
export function get(url, requestData) {
  const axios = returnAxiosInstance();
  if (requestData) {
    return axios.get(url, { params: requestData });
  }
  return axios.get(url);
}

//POST REQUEST
export function post(url, requestData, accessToken) {
  const axios = returnAxiosInstance(accessToken);
  return axios.post(url, requestData);
}

//PATCH REQUEST
export function patch(url, requestData) {
  const axios = returnAxiosInstance();
  return axios.patch(url, requestData);
}
