import { register } from '../lib/index';
import { showCustomAlert } from './showCustomAlert';

// Función para mostrar la página de registro
export const registerPage = (navigateTo) => {
  const registerForm = document.createElement('div');
  registerForm.innerHTML = `
  <div id="register">
    <div id="img-register"></div>
    <form id="register-form" autocomplete="off">
      <h1>Create an account</h1>
      
      <div class="input-group">
          <label for="register-name">Name</label>
          <input type="name" id="register-name" placeholder="M******" required/>
      </div>
      
      <div class="input-group">
          <label for="register-email">Email</label>
          <input type="email" id="register-email" placeholder="example@gmail.com" required />
      </div>
      
      <div class="input-group">
          <label for="register-password">Password</label>
          <input type="password" id="register-password" placeholder="*********" required />
      </div>
      
      <button type="submit">Register</button>
   </form>
</div>
`;

  // Evento de envío para el formulario de registro
  registerForm.querySelector('#register-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Intenta registrar al usuario
    // if (register(email, password)) {
    //   showCustomAlert('User registered successfully!');
    //   navigateTo('/login');
    //   // Aquí deberías redirigir al usuario a la página de inicio o donde sea necesario
    // } else if (error.message === 'User already exists') {
    //   showCustomAlert('This user is already registered. Please try logging in.');
    // } else {
    //   // Si el registro falla, muestra un mensaje de error
    //   showCustomAlert('An error occurred during registration');
    // }

    try {
      if (register(email, password)) {
        showCustomAlert('User registered successfully!');
        navigateTo('/login');
      }
    } catch (error) {
      switch (error.message) {
        case 'Invalid email':
          showCustomAlert('Please enter a valid email.');
          break;
        case 'Password must be at least 6 characters long':
          showCustomAlert('Password must be at least 6 characters long.');
          break;
        case 'User already exists':
          showCustomAlert('This user is already registered. Please try logging in.');
          break;
        default:
          showCustomAlert('An error occurred during registration');
      }
    }
  });

  return registerForm;
};
