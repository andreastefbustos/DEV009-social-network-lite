// aqui exportaras las funciones que necesites

import {
// createPost, deletePost, editPost, getPosts, init, login, register, getLoggedInUser,
  login as userLogin,
  register as registerPage,
  logout as userLogout,
  getLoggedInUser as loggedInUser,
} from './services';

const login = (email, password) => userLogin(email, password);
const register = (email, password) => registerPage(email, password);
const logout = () => userLogout();
const getLoggedInUser = () => loggedInUser();

export {
  login,
  register,
  logout,
  getLoggedInUser,
};
