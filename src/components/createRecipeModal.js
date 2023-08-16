import { isUserLoggedIn } from './auth';

export const createRecipeModal = (recipe) => {
  if (isUserLoggedIn()) {
    // Se crea el modal
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';

    // Crear el contenido del modal
    const content = document.createElement('div');
    content.className = 'modal-content';

    // Crear el boton de cerrar (x) y su evento
    const closeModalIcon = document.createElement('i');
    closeModalIcon.className = 'close-botton-modal fa-solid fa-xmark';
    closeModalIcon.addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    const ingredientTitle = document.createElement('h1');
    ingredientTitle.textContent = 'Ingredientes';

    // Contenido para los ingredientes
    const ingredientsList = document.createElement('ul');
    ingredientsList.className = 'ingredients';
    recipe.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement('li');
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
    });

    const stepTitle = document.createElement('h1');
    stepTitle.textContent = 'Preparación';

    // Paso a paso preparacion de la receta
    const stepsList = document.createElement('ol');
    stepsList.className = 'steps';
    recipe.steps.forEach((step) => {
      const stepItem = document.createElement('li');
      stepItem.textContent = step;
      stepsList.appendChild(stepItem);
    });

    // Agregar las listas al contenido del modal
    content.append(closeModalIcon, ingredientTitle, ingredientsList, stepTitle, stepsList);
    modal.append(content);

    // Agregar el modal al body
    document.body.append(modal);
  }
};
