// eslint-disable-next-line import/no-cycle
import { userLogin } from './login';
import { isUserLoggedIn, logout } from './sessionManager.js';

const home = () => {
  const root = document.getElementById('root');
  const homePage = document.createElement('div');

  // Creando el header
  const header = document.createElement('header');
  header.classList.add('header');

  // Crear el nav (menu)
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const div1 = document.createElement('div');
  div1.innerHTML = '<i class="fa-solid fa-bars"></i>';

  const div2 = document.createElement('div');
  div2.innerHTML = 'VitalDish';

  nav.appendChild(div1);
  nav.appendChild(div2);

  // Crear el div de search
  const search = document.createElement('div');
  search.classList.add('search');

  const div3 = document.createElement('div');
  div3.classList.add('search-icon');
  div3.innerHTML = '<i class="fa-solid fa-magnifying-glass">';

  const input = document.createElement('input');
  input.type = 'search';
  input.id = 'search-input';
  input.classList.add('search-input');
  input.placeholder = 'Search';

  search.appendChild(div3);
  search.appendChild(input);

  // Crear el div de login
  const login = document.createElement('div');
  login.classList.add('login');

  const div4 = document.createElement('div');
  div4.innerHTML = '<i class="fa-regular fa-user"></i>';

  const a = document.createElement('a');
  a.id = 'login-link';
  a.href = '';
  a.innerHTML = 'Login';

  const updateLoginLink = () => {
    if (isUserLoggedIn()) {
      a.innerHTML = 'Logout';
    } else {
      a.innerHTML = 'Log In';
    }
  };

  updateLoginLink();

  a.addEventListener('click', (event) => {
    event.preventDefault();

    if (isUserLoggedIn()) {
      logout();
      document.getElementById('root').innerHTML = ''; // Limpiamos el contenido anterior
      document.getElementById('root').appendChild(home()); // Refrescamos la página home
    } else {
      const loginForm = userLogin();
      root.innerHTML = '';
      root.appendChild(loginForm);
    }
  });

  login.appendChild(div4);
  login.appendChild(a);

  // Se añaden todos los elementos al header
  header.appendChild(nav);
  header.appendChild(search);
  header.appendChild(login);

  // Añade el header al cuerpo del documento
  homePage.appendChild(header);
  return homePage;
};

export { home };
