import { isUserLoggedIn } from './auth';

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
    likeButton.addEventListener('click', () => {
      if (likeButton.classList.contains('active')) {
        likeButton.classList.remove('active');
        // Aquí se maneja la lógica para deshacer el "me gusta"
        recipe.likes -= 1;
        localStorage.removeItem(`likes_${recipe.id}`);
      } else {
        likeButton.classList.add('active');
        // Aquí se maneja la lógica para agregar el "me gusta"
        recipe.likes += 1;
        localStorage.setItem(`likes_${recipe.id}`, recipe.likes);
      }
      likesCount.textContent = recipe.likes; // Actualiza el texto del contador
    });
    recipeElement.append(likeButton, likesCount);
  }

  return recipeElement;
};
