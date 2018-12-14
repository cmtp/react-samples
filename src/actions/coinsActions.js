import axios from 'axios';

import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR,
} from './actionTypes';

import { request, received, error } from '../shared/redux/baseActions';
/* eslint-disable import/prefer-default-export */
export const fetchCoins = () => dispatch => {
  dispatch(request(FETCH_COINS_REQUEST));

  const axiosData = {
    method: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('AXIOS ERROR', err.response);
      dispatch(error(FETCH_COINS_ERROR));
    });
};
