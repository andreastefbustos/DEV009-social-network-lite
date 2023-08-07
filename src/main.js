// Este es el punto de entrada de tu aplicacion
import { home } from './components/home.js';
import { userLogin } from './components/login.js';
import { registerPage } from './components/register.js';

const root = document.getElementById('root');

// document.getElementById('search-icon').addEventListener('click', () => {
//   const searchInput = document.getElementById('search-input');
//   if (searchInput.style.display === 'none' || searchInput.style.display === '') {
//     searchInput.style.display = 'block';
//   } else {
//     searchInput.style.display = 'none';
//   }
// });

const routes = [
  { path: '/', component: home },
  { path: '/login', component: userLogin },
  { path: '/register', component: registerPage },
];

const defaultRoute = '/';

const navigateTo = (hash) => {
  const route = routes.find((routeFind) => routeFind.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    root.innerHTML = ''; // Esto vaciará el div 'root' antes de agregar el nuevo componente.
    root.appendChild(route.component());
  }
};

navigateTo(window.localStorage.pathname || defaultRoute);
