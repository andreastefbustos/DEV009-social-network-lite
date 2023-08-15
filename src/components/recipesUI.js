import { isUserLoggedIn } from './auth';
import { getLoggedInUser } from '../lib/index';

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

  // Likes para la receta solo cuando el usuario este logeado
  if (isUserLoggedIn()) {
    const likesCount = document.createElement('span');
    likesCount.textContent = recipe.likes; // Inicialmente muestra el número de likes

    const likeButton = document.createElement('i');
    likeButton.className = 'fa-regular fa-heart'; // Clase para el corazon de FontAwesome

    // Obtener todos los likes de los usuarios
    const initialAllLikes = JSON.parse(localStorage.getItem('recipeLikes')) || {};

    // Obtener el email del usuario logeado
    const userEmail = getLoggedInUser().email;

    // Verificar si el usuario actual ha dado "me gusta" a esta receta
    if (initialAllLikes[userEmail] && initialAllLikes[userEmail].includes(recipe.id)) {
      likeButton.classList.add('active');
    }

    likeButton.addEventListener('click', () => {
      // Obtener todos los likes de los usuarios
      const currentAllLikes = JSON.parse(localStorage.getItem('recipeLikes')) || {};

      if (likeButton.classList.contains('active')) {
        likeButton.classList.remove('active');
        // Aquí se maneja la lógica para deshacer el "me gusta"
        recipe.likes -= 1;
        // Remover el "me gusta" del usuario
        const userLikes = currentAllLikes[userEmail] || [];
        const index = userLikes.indexOf(recipe.id);
        if (index > -1) userLikes.splice(index, 1);
      } else {
        likeButton.classList.add('active');
        // Aquí se maneja la lógica para agregar el "me gusta"
        recipe.likes += 1;
        // Agregar el "me gusta" del usuario
        currentAllLikes[userEmail] = currentAllLikes[userEmail] || [];
        currentAllLikes[userEmail].push(recipe.id);
      }
      // Guardar de nuevo todos los likes
      localStorage.setItem('recipeLikes', JSON.stringify(currentAllLikes));
      likesCount.textContent = recipe.likes;
    });
    recipeElement.append(likeButton, likesCount);
  }

  return recipeElement;
};
