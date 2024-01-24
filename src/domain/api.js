import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',

  register: '/user/register',
  login: '/user/login',
  getProfile: '/user/get-profile',

  getPost: '/post',
  getMyPost: '/post/my-post',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const postRegister = (data) => callAPI(urls.register, 'POST', {}, {}, data);
export const postLogin = (data) => callAPI(urls.login, 'POST', {}, {}, data);
export const getProfile = () => callAPI(urls.getProfile, 'GET');

export const getPost = () => callAPI(urls.getPost, 'GET');
export const getMyPost = () => callAPI(urls.getMyPost, 'GET');
