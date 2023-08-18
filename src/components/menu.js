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

  const div1 = document.createElement('div');
  div1.id = 'icon-menu';
  div1.innerHTML = '<i class="fa-solid fa-bars"></i>';

  const asideMenu = document.createElement('aside');
  asideMenu.classList.add('sidebar-menu');
  asideMenu.innerHTML = `
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

  // Filtros por flavors
  const categoryFlavorsSweet = document.querySelector('#sweet');
  categoryFlavorsSweet.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Sweet');
    asideMenu.classList.remove('open');
  });

  const categoryFlavorsSalty = document.querySelector('#salty');
  categoryFlavorsSalty.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Salty');
    asideMenu.classList.remove('open');
  });

  const categoryFlavorsSweetSalty = document.querySelector('#sweet-salty');
  categoryFlavorsSweetSalty.addEventListener('click', () => {
    filterCategoryRecipe('flavors', 'Sweet&Salty');
    asideMenu.classList.remove('open');
  });

  // Filtros por meal time
  const categoryMealTimeBreakfast = document.querySelector('#breakfast');
  categoryMealTimeBreakfast.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Breakfast');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeLunch = document.querySelector('#lunch');
  categoryMealTimeLunch.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Lunch');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeDinner = document.querySelector('#dinner');
  categoryMealTimeDinner.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Dinner');
    asideMenu.classList.remove('open');
  });

  const categoryMealTimeSnack = document.querySelector('#snack');
  categoryMealTimeSnack.addEventListener('click', () => {
    filterCategoryRecipe('mealTime', 'Snack');
    asideMenu.classList.remove('open');
  });

  return {
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};
