import { register } from '../lib/services';

// Función para mostrar la página de registro
export const registerPage = () => {
  const registerForm = document.createElement('div');
  registerForm.innerHTML = `
  <div id="register">
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
  registerForm.querySelector('#register-form').addEventListener('submit', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Intenta registrar al usuario
    if (register(email, password)) {
      alert('User registered successfully!');
      // Aquí deberías redirigir al usuario a la página de inicio o donde sea necesario
    } else {
      // Si el registro falla, muestra un mensaje de error
      alert('An error occurred during registration');
    }
  });

  return registerForm;
};
