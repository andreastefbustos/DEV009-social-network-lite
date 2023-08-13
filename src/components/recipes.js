import { isUserLoggedIn } from './auth';
import { showCustomAlert } from './showCustomAlert';

export const recipes = [
  {
    id: 1,
    imageUrl: '../img/recipes/ensalada-alkalina.png',
    title: 'Ensala Alkalina',
    likes: 0,
  },
  {
    id: 2,
    imageUrl: '../img/recipes/pasta-cremosa.png',
    title: 'Pasta cremosa',
    likes: 0,
  },
  {
    id: 3,
    imageUrl: '../img/recipes/pescado.png',
    title: 'Pescado con aderezo y platano',
    likes: 0,
  },
  {
    id: 4,
    imageUrl: '../img/recipes/tortilla-atun.png',
    title: 'Tortilla de Atún',
    likes: 0,
  },
];

recipes.forEach((recipe) => {
  const likesFromLocalStorage = localStorage.getItem(`likes_${recipe.id}`);
  if (likesFromLocalStorage !== null) {
    recipe.likes = parseInt(likesFromLocalStorage, 10);
  }
});

export const createRecipeElement = (recipe, navigateTo) => {
  const recipeElement = document.createElement('div');
  recipeElement.classList.add('recipe');

  // Crear la imagen de la receta
  const img = document.createElement('img');
  img.src = recipe.imageUrl;
  img.alt = recipe.title;

  // Titulo de la receta
  const titleElement = document.createElement('h2');
  titleElement.textContent = recipe.title;

  // Likes para la receta y evento
  const likesCount = document.createElement('span');
  likesCount.textContent = recipe.likes; // Inicialmente muestra el número de likes

  const likeButton = document.createElement('i');
  likeButton.className = 'fa-regular fa-heart'; // Clase para el corazon de FontAwesome
  likeButton.addEventListener('click', () => {
    if (isUserLoggedIn()) {
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
    } else {
      showCustomAlert("Debes iniciar sesión para dar 'me gusta' a una receta.");
      navigateTo('/login');
    }
  });

  recipeElement.append(img, titleElement, likeButton, likesCount);

  return recipeElement;
};
