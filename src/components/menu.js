import { recipes } from './data_recipes';
import { createRecipeElement } from './recipesUI';

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

  const categoryFlavorsSweet = document.querySelector('#sweet');
  categoryFlavorsSweet.addEventListener('click', () => {
    const sweetRecipe = recipes.filter((recipe) => recipe.flavors === 'Sweet');
    const recipesContainer = document.getElementsByClassName('recipes-container')[0];
    while (recipesContainer.firstChild) {
      recipesContainer.removeChild(recipesContainer.lastChild);
    }

    sweetRecipe.forEach((element) => {
      const filterRecipe = createRecipeElement(element);
      console.log(recipesContainer);
      recipesContainer.appendChild(filterRecipe);
    });
  });

  return {
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};

// const mealTime = recipes.filter(
// (recipe) => recipe.mealTime === 'Breakfast' ||
// recipe.mealTime === 'Lunch' || recipe.mealTime === 'Dinner' || recipe.mealTime === 'Snack');
