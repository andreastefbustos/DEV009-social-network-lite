import { logout } from '../lib/index';

// doble exclamación devuelve un booleano
const isUserLoggedIn = () => !!localStorage.getItem('user');

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

  const asideMenu = document.createElement('aside');
  asideMenu.classList.add('sidebar-menu');
  asideMenu.innerHTML = `
  <h1 class="menu-title">Flavors</h1>
  <ul>
    <li id='sweet'>Sweet</li>
    <li id='salty'>Salty</li>
    <li id='sweet-salty'>Sweet&Salty</li>
  </ul>

  <h1 class="menu-title">Food Time</h1>
  <ul>
    <li id='breakfast'>Breakfast</li>
    <li id='lunch'>Lunch</li>
    <li id='dinner'>Dinner</li>
    <li id='snack'>Snack</li>
  </ul>
  `;

  const div2 = document.createElement('div');
  div2.classList.add('title-home');
  div2.innerHTML = 'VitalDish';

  nav.append(div1, div2);
  document.body.appendChild(asideMenu);

  // Funcionalidad para ocultar el menu
  div1.addEventListener('click', () => {
    asideMenu.classList.toggle('open');
  });

  // Ocultar el menú al hacer clic fuera de él
  document.addEventListener('click', (event) => {
    if (!asideMenu.contains(event.target) && !div1.contains(event.target)) {
      asideMenu.classList.remove('open');
    }
  });

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
