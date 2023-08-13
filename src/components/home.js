import { createMenu } from './menu';
import { createSearchBar } from './searchBar';
import { createLoginArea } from './loginArea';
import { recipes } from './data_recipes';
import { createRecipeElement } from './recipesUI';

export const home = (navigateTo) => {
  const homePage = document.createElement('div');

  // Creando el header
  const header = document.createElement('header');
  header.classList.add('header');

  const menuComponents = createMenu();

  const recipesContainer = document.createElement('div');
  recipesContainer.classList.add('recipes-container');

  recipes.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe, navigateTo);
    recipesContainer.appendChild(recipeElement);
  });

  // Se añaden los elementos individuales al header
  header.appendChild(menuComponents.navElement);
  header.appendChild(createSearchBar());
  header.appendChild(createLoginArea(navigateTo));

  // Añade el header al cuerpo del documento
  homePage.appendChild(header);
  homePage.appendChild(recipesContainer);

  // Añade el asideMenu al body
  document.body.appendChild(menuComponents.asideMenuElement);

  return homePage;
};
