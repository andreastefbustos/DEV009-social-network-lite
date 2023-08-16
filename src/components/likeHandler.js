import { isUserLoggedIn } from './auth';
import { getLoggedInUser } from '../lib/index';

export const handleLikesForRecipe = (recipe, recipeElement) => {
// Likes para la receta solo cuando el usuario este logeado
  if (isUserLoggedIn()) {
    const likesCount = document.createElement('span');
    likesCount.textContent = `${recipe.likes.length} likes`; // Inicialmente muestra el número de likes

    const likeButton = document.createElement('i');
    likeButton.className = 'fa-regular fa-heart'; // Clase para el corazon de FontAwesome

    const likeContainer = document.createElement('div');
    likeContainer.style.display = 'flex';
    likeContainer.style.flexDirection = 'column';

    // Obtener el email del usuario logeado
    const userEmail = getLoggedInUser().email;

    // Verificar si el usuario actual ha dado "me gusta" a esta receta
    if (recipe.likes.includes(userEmail)) {
      likeButton.classList.add('active');
    }

    likeButton.addEventListener('click', () => {
      if (likeButton.classList.contains('active')) {
        likeButton.classList.remove('active');

        const index = recipe.likes.indexOf(userEmail);
        if (index !== -1) recipe.likes.splice(index, 1);
      } else {
        likeButton.classList.add('active');
        recipe.likes.push(userEmail);
      }
      // Guardar de nuevo todos los likes en localStorage
      localStorage.setItem(`recipeLikes_${recipe.id}`, JSON.stringify(recipe.likes));
      // Actualiza los likes
      likesCount.textContent = `${recipe.likes.length} likes`;
    });
    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likesCount);
    recipeElement.appendChild(likeContainer);
  }
};
