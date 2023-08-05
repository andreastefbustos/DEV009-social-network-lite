import { userLogin } from './login';

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
  a.innerHTML = 'Log In';

  a.addEventListener('click', (event) => { // Adjuntar evento aquí
    event.preventDefault();

    const loginForm = userLogin(); // Crea el formulario de inicio de sesión
    root.innerHTML = ''; // Limpiar el nodo raíz
    root.appendChild(loginForm); // Agrega el formulario a la raíz
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