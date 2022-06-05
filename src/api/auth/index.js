import axios from 'axios';
import { setCookie, getCookie } from 'utils/cookie';

const COOKIE_KEY = process.env.REACT_APP_AUTH_COOKIE_KEY;

const getAuthorizationToken = () => {
  const accessToken = getCookie(COOKIE_KEY);
  return `Bearer ${accessToken}`;
};

export const loginApi = async (paylod) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/auth`,
      paylod,
    });

    const {
      data: { accessToken },
    } = res;

    setCookie(COOKIE_KEY, accessToken);
  } catch (err) {
    console.log('err', err);
  }
};

export const getUserApi = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/api/members/me`,
      headers: {
        Authorization: getAuthorizationToken(),
      },
    });

    const { id, name, email } = res.data;

    return { id, name, email };
  } catch (err) {
    console.log('err', err);
  }
};

export const signUpApi = async (payload) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/members',
      payload,
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const duplicateEmailApi = async (payload) => {
  try {
    await axios({
      method: 'POST',
      url: '/api/members/duplicate-email',
      payload,
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const updateNameApi = async (payload) => {
  try {
    await axios({
      method: 'PUT',
      url: '/api/members/me/name',
      headers: {
        Authorization: getAuthorizationToken(),
      },
      payload,
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const updatePasswordApi = async (payload) => {
  try {
    await axios({
      method: 'PUT',
      url: '/api/members/me/password',
      headers: {
        Authorization: getAuthorizationToken(),
      },
      payload,
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const unRegisterApi = async (payload) => {
  try {
    await axios({
      method: 'DELETE',
      url: '/api/members/me',
      headers: {
        Authorization: getAuthorizationToken(),
      },
      payload,
    });
  } catch (err) {
    console.log('err', err);
  }
};
