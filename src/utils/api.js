// This file is for future improvements

import axios from "axios";

export const get = async (url) => {
  return axios.get({
    baseURL: `http://localhost:3000/api${url}`,
    headers: {Authorization: 'Bearer ' + 'localStorage.token'}
  });
}