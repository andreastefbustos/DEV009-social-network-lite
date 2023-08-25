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

  const iconSearch = document.createElement('div');
  iconSearch.classList.add('search-icon');
  iconSearch.innerHTML = '<i class="fa-solid fa-magnifying-glass">';

  const inputSearch = document.createElement('input');
  inputSearch.type = 'search';
  inputSearch.id = 'search-input';
  inputSearch.classList.add('search-input');
  inputSearch.placeholder = 'Search...';

  // Agrega el listener al ícono de la lupa
  iconSearch.addEventListener('click', () => {
    if (inputSearch.style.display === 'none' || inputSearch.style.display === '') {
      inputSearch.style.display = 'block';
      inputSearch.focus(); // Opcional: pone el foco en el input cuando se muestra.
    } else {
      inputSearch.style.display = 'none';
    }
  });

  inputSearch.addEventListener('input', (event) => {
    const query = normalizeString(event.target.value);
    const filteredRecipes = recipes.filter(
      (recipe) => normalizeString(recipe.title).includes(query),
    );
    displayFilteredRecipes(filteredRecipes);
  });

  search.append(iconSearch, inputSearch);
  return search;
};
