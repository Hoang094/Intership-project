const APP_USER_STORAGE = 'BEACH-RESORT-USER-STORAGE';
const APP_ACCESS_TOKEN = 'BEACH-RESORT-ACCESS-TOKEN';
const APP_REFRESH_TOKEN = 'BEACH-RESORT-REFRESH-TOKEN';

export const getSessionUser = () => {
  const userStr = localStorage.getItem(APP_USER_STORAGE);

  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export const getSessionToken = () => {
  const tokenStr = localStorage.getItem(APP_ACCESS_TOKEN);

  if (tokenStr) {
    return tokenStr;
  }
  return null;
};

export const getRefreshToken = () => {
  const tokenStr = localStorage.getItem(APP_REFRESH_TOKEN);

  if (tokenStr) {
    return tokenStr;
  }
  return null;
};

export const setSessionUserAndToken = (user, accessToken, refreshToken) => {
  localStorage.setItem(APP_USER_STORAGE, JSON.stringify(user));
  localStorage.setItem(APP_ACCESS_TOKEN, accessToken);
  localStorage.setItem(APP_REFRESH_TOKEN, refreshToken);
};

export const setSessionAccessAndRefreshToken = (accessToken, refreshToken) => {
  localStorage.setItem(APP_ACCESS_TOKEN, accessToken);
  localStorage.setItem(APP_REFRESH_TOKEN, refreshToken);
};

export const setSessionUser = (user) => {
  localStorage.setItem(APP_USER_STORAGE, JSON.stringify(user));
};

export const setSessionUserKeyAgainstValue = (key, value) => {
  const userStr = localStorage.getItem(APP_USER_STORAGE);
  let userStrObj = JSON.parse(userStr);

  userStrObj = {
    ...userStrObj, [key]: value
  };

  localStorage.setItem(APP_USER_STORAGE, JSON.stringify(userStrObj));
};

export const removeSessionAndLogoutUser = () => {
  localStorage.removeItem(APP_USER_STORAGE);
  localStorage.removeItem(APP_ACCESS_TOKEN);
  localStorage.removeItem(APP_REFRESH_TOKEN);
  window.location.href = '/auth/login';
};
