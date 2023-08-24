import { login } from '../lib/index';
import { showCustomAlert } from './showCustomAlert';
import imgLogin from '../img/login.png';

export const userLogin = (navigateTo) => {
  // Muestra el formulario de inicio de sesión
  const loginForm = document.createElement('div');
  loginForm.id = 'login';
  loginForm.innerHTML = `
    <form id="login-form" autocomplete="off">
      <h1 id="title-login">VitalDish</h1>

      <div class="email-container">
        <p class="email-password">Email</p>
        <input type="email" id="email" placeholder="example@gmail.com" required />
      </div>

      <div class="password-container">
        <p class="email-password">Password</p>
        <input type="password" id="password" placeholder="*********" required />
      </div>

      <button id="login-button" type="submit">Login</button>
      <p id="joinPage">Do not have an account? <span id="join" class="highlight">Join now</span></p>
    </form>
    <img id="img-login" src=${imgLogin} alt="login">
  `;

  loginForm.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Intenta iniciar sesión
    if (login(email, password)) {
      navigateTo('/');
    } else {
      showCustomAlert('Invalid login. Please register if you do not have an account.');
    }
  });

  loginForm.querySelector('#join').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/register');
  });

  return loginForm;
};
