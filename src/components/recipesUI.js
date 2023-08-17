import { createRecipeModal } from './createRecipeModal';
import { handleInteractionForRecipe } from './handleInteraction';

export const createRecipeElement = (recipe) => {
  const recipeElement = document.createElement('div');
  recipeElement.classList.add('recipe');

  // Crear la imagen de la receta
  const img = document.createElement('img');
  img.src = recipe.imageUrl;
  img.alt = recipe.title;

  // Titulo de la receta
  const titleElement = document.createElement('h2');
  titleElement.classList.add('title-recipe');
  titleElement.textContent = recipe.title;

  titleElement.addEventListener('click', () => {
    createRecipeModal(recipe);
  });

  recipeElement.append(img, titleElement);

  handleInteractionForRecipe(recipe, recipeElement);

  return recipeElement;
};
