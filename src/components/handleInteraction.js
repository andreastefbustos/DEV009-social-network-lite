import { isUserLoggedIn } from './auth';
import { getLoggedInUser } from '../lib/index';
import { openCommentModal } from './createPostModal';

export const handleInteractionForRecipe = (recipe, recipeElement) => {
  if (isUserLoggedIn()) {
    // Obtener el email del usuario logeado
    const userEmail = getLoggedInUser().email;

    // Likes
    const likesCount = document.createElement('span');
    likesCount.textContent = `${recipe.likes.length} likes`; // Inicialmente muestra el número de likes

    const likeButton = document.createElement('i');
    likeButton.className = 'fa-regular fa-heart';

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

    // Comments
    const commentIcon = document.createElement('i');
    commentIcon.className = 'fa-regular fa-comment';
    commentIcon.addEventListener('click', () => {
      openCommentModal();
    });

    const commentAll = document.createElement('p');
    commentAll.className = 'commentPostAll';
    commentAll.textContent = 'View all comments';

    // Container para ambos Icon likes y comments
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container-likes-comments';

    // Mostrar información
    const displayInformation = document.createElement('div');
    displayInformation.className = 'display-information-likes-allComents';

    iconsContainer.append(likeButton, commentIcon);
    displayInformation.append(likesCount, commentAll);
    recipeElement.append(iconsContainer, displayInformation);
  }
};
