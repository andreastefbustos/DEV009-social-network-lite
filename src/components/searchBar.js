import { recipes } from './data_recipes';
import { createRecipeElement } from './recipesUI';

const displayFilteredRecipes = (filteredRecipes) => {
  const recipesContainer = document.getElementsByClassName('recipes-container')[0];
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.lastChild);
  }

  filteredRecipes.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe);
    recipesContainer.appendChild(recipeElement);
  });
};

const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const createSearchBar = () => {
  const search = document.createElement('div');
  search.classList.add('search');

  const div3 = document.createElement('div');
  div3.classList.add('search-icon');
  div3.innerHTML = '<i class="fa-solid fa-magnifying-glass">';

  const input = document.createElement('input');
  input.type = 'search';
  input.id = 'search-input';
  input.classList.add('search-input');
  input.placeholder = 'Search...';

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

  input.addEventListener('input', (event) => {
    const query = normalizeString(event.target.value);
    const filteredRecipes = recipes.filter(
      (recipe) => normalizeString(recipe.title).includes(query),
    );
    displayFilteredRecipes(filteredRecipes);
  });

  search.append(div3, input);
  return search;
};
