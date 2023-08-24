import { recipes } from './data_recipes';
import { createRecipeElement } from './recipesUI';

const filterCategoryRecipe = (property, value) => {
  const categoryRecipe = recipes.filter((recipe) => recipe[property] === value);
  const recipesContainer = document.getElementsByClassName('recipes-container')[0];
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.lastChild);
  }

  categoryRecipe.forEach((element) => {
    const filterRecipe = createRecipeElement(element);
    recipesContainer.appendChild(filterRecipe);
  });
};

export const createMenu = () => {
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const iconMenu = document.createElement('div');
  iconMenu.id = 'icon-menu';
  iconMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';

  const titleHeader = document.createElement('div');
  titleHeader.classList.add('title-home');
  titleHeader.innerHTML = 'VitalDish';

  const asideMenu = document.createElement('aside');
  asideMenu.classList.add('sidebar-menu');
  asideMenu.innerHTML = `
  <i class="close fa-solid fa-circle-xmark"></i>
  <h1 class="menu-title">Recipes</h1>
  <ul>
    <li id='all' class='category-item'>View All</li>
  </ul>

  <h1 class="menu-title">Flavors</h1>
  <ul>
    <li id='sweet' class='category-item'>Sweet</li>
    <li id='salty' class='category-item'>Salty</li>
    <li id='sweet-salty' class='category-item'>Sweet&Salty</li>
  </ul>

  <h1 class="menu-title">Meal Time</h1>
  <ul>
    <li id='breakfast' class='category-item'>Breakfast</li>
    <li id='lunch' class='category-item'>Lunch</li>
    <li id='dinner' class='category-item'>Dinner</li>
    <li id='snack' class='category-item'>Snack</li>
  </ul>
  `;

  nav.append(iconMenu, titleHeader);

  // Funcionalidad para mostrar el menu
  iconMenu.addEventListener('click', () => {
    asideMenu.classList.toggle('open');
  });

  // Evento al icono de la x para ocultar el aside menu
  const closeMenuAside = asideMenu.querySelector('.close');
  closeMenuAside.addEventListener('click', () => {
    asideMenu.classList.remove('open');
  });

  // Filtros por flavors
  const categoryFlavorsSweet = asideMenu.querySelector('#sweet');
  categoryFlavorsSweet.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Sweet');
    asideMenu.classList.remove('open');
  });

  const categoryFlavorsSalty = asideMenu.querySelector('#salty');
  categoryFlavorsSalty.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Salty');
    asideMenu.classList.remove('open');
  });

  const categoryFlavorsSweetSalty = asideMenu.querySelector('#sweet-salty');
  categoryFlavorsSweetSalty.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Sweet&Salty');
    asideMenu.classList.remove('open');
  });

  // Filtros por meal time
  const categoryMealTimeBreakfast = asideMenu.querySelector('#breakfast');
  categoryMealTimeBreakfast.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Breakfast');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeLunch = asideMenu.querySelector('#lunch');
  categoryMealTimeLunch.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Lunch');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeDinner = asideMenu.querySelector('#dinner');
  categoryMealTimeDinner.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Dinner');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeSnack = asideMenu.querySelector('#snack');
  categoryMealTimeSnack.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Snack');
    asideMenu.classList.remove('open');
  });

  // Mostrar todas recetas
  const viewAllRecipes = asideMenu.querySelector('#all');
  viewAllRecipes.addEventListener('click', () => {
    const recipesContainer = document.getElementsByClassName('recipes-container')[0];
    while (recipesContainer.firstChild) {
      recipesContainer.removeChild(recipesContainer.lastChild);
    }

    recipes.forEach((element) => {
      const allRecipes = createRecipeElement(element);
      recipesContainer.appendChild(allRecipes);
    });

    asideMenu.classList.remove('open');
  });

  return {
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};
