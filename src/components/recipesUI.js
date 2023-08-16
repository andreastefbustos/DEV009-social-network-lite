import { handleCommentForRecipes } from './commentHandler';
import { handleLikesForRecipe } from './likeHandler';

export const createRecipeElement = (recipe) => {
  const recipeElement = document.createElement('div');
  recipeElement.classList.add('recipe');

  // Crear la imagen de la receta
  const img = document.createElement('img');
  img.src = recipe.imageUrl;
  img.alt = recipe.title;

  // Titulo de la receta
  const titleElement = document.createElement('h2');
  titleElement.textContent = recipe.title;

  recipeElement.append(img, titleElement);

  handleLikesForRecipe(recipe, recipeElement);
  handleCommentForRecipes(recipe, recipeElement);

  return recipeElement;
};
