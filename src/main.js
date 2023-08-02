// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

document.getElementById('search-icon').addEventListener('click', () => {
  const searchInput = document.getElementById('search-input');
  if (searchInput.style.display === 'none' || searchInput.style.display === '') {
    searchInput.style.display = 'block';
  } else {
    searchInput.style.display = 'none';
  }
});
