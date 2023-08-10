import { login } from '../lib/index';
import { showCustomAlert } from './showCustomAlert';
// import { getLoggedInUser } from '../lib/services';

export const userLogin = (navigateTo) => {
  // Muestra el formulario de inicio de sesión
  const loginForm = document.createElement('div');
  loginForm.innerHTML = `
  <div id="login-container">
    <img id="img-login" src="../img/login.png" alt="login">
    <div id="login-content">
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

        <button type="submit">Login</button>
      </form>
      <p id="join">Do not have an account? <span class="highlight">Join now</span></p>
  </div>
</div>
`;

  // Evento de envío para el formulario de inicio de sesión
  loginForm.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Intenta iniciar sesión
    if (login(email, password)) {
      // esto es para ver los usuarios que hicieron login
      // const loggedInUser = getLoggedInUser();
      // console.log('Logged in user:', loggedInUser);
      navigateTo('/');
    } else {
      showCustomAlert('Invalid login. Please register if you do not have an account.');
    }
  });

  // Evento de click para el enlace Join now
  loginForm.querySelector('#join').addEventListener('click', (event) => {
    event.preventDefault();
    navigateTo('/register');
  });

  return loginForm;
};
