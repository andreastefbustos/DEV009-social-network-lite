import { logout } from '../lib/index';

// Manejadores de eventos

// doble exclamación devuelve un booleano
export const isUserLoggedIn = () => !!localStorage.getItem('user');

export const handleLoginClick = (event, navigateTo) => {
  event.preventDefault();
  if (isUserLoggedIn()) {
    logout();
    navigateTo('/');
  } else {
    navigateTo('/login');
  }
};
