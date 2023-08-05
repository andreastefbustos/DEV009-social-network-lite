import { login, getLoggedInUser } from '../lib/services';
import { registerPage } from './register';

export const userLogin = () => {
  // Muestra el formulario de inicio de sesión
  const loginForm = document.createElement('div');
  loginForm.innerHTML = `
        <form id="login-form" autocomplete="off">
          <p>Email</p>
          <input type="email" id="email" placeholder="example@gmail.com" required />
          <p>Password</p>
          <input type="password" id="password" placeholder="*********" required />
          <button type="submit">Login</button>
        </form>
        <p id="join">Do not have an account? Join now</p>
    `;

  // Evento de envío para el formulario de inicio de sesión
  loginForm.querySelector('#login-form').addEventListener('submit', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Intenta iniciar sesión
    if (login(email, password)) {
      const loggedInUser = getLoggedInUser();
      console.log('Logged in user:', loggedInUser);
      alert('User logged in successfully!');
      // Aquí deberías redirigir al usuario a la página de inicio o donde sea necesario
    } else {
      // Si el inicio de sesión falla, muestra un mensaje de error
      alert('Invalid login. Please register if you do not have an account.');
    }
  });

  // Evento de click para el enlace Join now
  loginForm.querySelector('#join').addEventListener('click', () => {
    document.getElementById('root').innerHTML = '';
    document.getElementById('root').appendChild(registerPage());
  });

  return loginForm;
};
