// aqui exportaras las funciones que necesites

import {
  createPost, deletePost, editPost, getPosts, init, login, register,
} from './services';

export const myFunction = () => {
  // Evento de click para el enlace Log In
  document.getElementById('login-link').addEventListener('click', (event) => {
    event.preventDefault();

    // Aquí mostramos el formulario de registro
    document.getElementById('app').innerHTML = `
      <form id="register-form">
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    `;

    // Evento de envío para el formulario de registro
    document.getElementById('register-form').addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Intenta iniciar sesión
      if (login(email, password)) {
        alert('User logged in successfully!');
        // Aquí deberías redirigir al usuario a la página de inicio o donde sea necesario
      } else {
        // Si el inicio de sesión falla, intenta registrar al usuario
        try {
          if (register(email, password)) {
            alert('User registered successfully!');
            // Aquí deberías redirigir al usuario a la página de inicio o donde sea necesario
          }
        } catch (error) {
          // Si el registro falla, entonces redirige al usuario a la página de registro
          window.location.href = 'register.html';
        }
      }
    });
  });
};

