import { isUserLoggedIn, logout } from './sessionManager.js';

const home = (navigateTo) => {
  const homePage = document.createElement('div');

  // Creando el header
  const header = document.createElement('header');
  header.classList.add('header');

  // Crear el nav (menu)
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const div1 = document.createElement('div');
  div1.id = 'icon-menu';
  div1.innerHTML = '<i class="fa-solid fa-bars"></i>';

  const div2 = document.createElement('div');
  div2.classList.add('title-home');
  div2.innerHTML = 'VitalDish';

  nav.append(div1, div2);

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

  // Asegura que el input esté oculto inicialmente.
  input.style.display = 'none';

  // Agrega el listener al ícono de la lupa
  div3.addEventListener('click', () => {
    if (input.style.display === 'none' || input.style.display === '') {
      input.style.display = 'block';
      input.focus(); // Opcional: pone el foco en el input cuando se muestra.
    } else {
      input.style.display = 'none';
    }
  });

  search.append(div3, input);

  // Crear el div de login
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

  a.addEventListener('click', (event) => {
    event.preventDefault();

    if (isUserLoggedIn()) {
      logout();
      navigateTo('/');
    } else {
      navigateTo('/login');
    }
  });

  login.append(div4, a);

  // Se añaden todos los elementos al header
  header.append(nav, search, login);

  // Añade el header al cuerpo del documento
  homePage.appendChild(header);
  return homePage;
};

export { home };
