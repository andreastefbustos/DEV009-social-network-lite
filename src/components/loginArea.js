import { isUserLoggedIn, handleLoginClick } from './auth';

export const createLoginArea = (navigateTo) => {
  const login = document.createElement('div');
  login.classList.add('login');

  const div4 = document.createElement('div');
  div4.innerHTML = '<i class="fa-regular fa-user"></i>';

  const a = document.createElement('a');
  a.id = 'login-link';
  a.href = '';

  const updateLoginLink = () => {
    if (isUserLoggedIn()) {
      a.innerHTML = 'Logout';
    } else {
      a.innerHTML = 'Login';
    }
  };

  updateLoginLink();

  a.addEventListener('click', (event) => handleLoginClick(event, navigateTo));

  login.append(div4, a);
  return login;
};
