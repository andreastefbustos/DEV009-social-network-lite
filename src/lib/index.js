// aqui exportaras las funciones que necesites

import {
// createPost, deletePost, editPost, getPosts, init, login, register, getLoggedInUser,
  login as userLogin,
  register as registerPage,
} from './services';

const login = (email, password) => userLogin(email, password);
const register = (email, password) => registerPage(email, password);

export { login, register };
