import { isUserLoggedIn } from './userLoggedIn';
import { logout } from '../lib/index';

const handleLoginClick = (event, navigateTo) => {
  event.preventDefault();
  if (isUserLoggedIn()) {
    logout();
    navigateTo('/');
  } else {
    navigateTo('/login');
  }
};

export const createLoginArea = (navigateTo) => {
  const login = document.createElement('div');
  login.classList.add('login');

  const iconLogin = document.createElement('div');
  iconLogin.innerHTML = '<i class="fa-regular fa-user"></i>';

  const loginLink = document.createElement('a');
  loginLink.id = 'login-link';
  loginLink.href = '';

  const updateLoginLink = () => {
    if (isUserLoggedIn()) {
      loginLink.innerHTML = 'Logout';
    } else {
      loginLink.innerHTML = 'Login';
    }
  };

  updateLoginLink();

  loginLink.addEventListener('click', (event) => handleLoginClick(event, navigateTo));

  login.append(iconLogin, loginLink);
  return login;
};
