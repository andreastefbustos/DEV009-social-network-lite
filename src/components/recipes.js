export const recipes = [
  {
    imageUrl: '../img/recipes/ensalada-alkalina.png',
    title: 'Ensala Alkalina',
  },
  {
    imageUrl: '../img/recipes/pasta-cremosa.png',
    title: 'Pasta cremosa',
  },
  {
    imageUrl: '../img/recipes/pescado.png',
    title: 'Pescado con aderezo y platano',
  },
  {
    imageUrl: '../img/recipes/tortilla-atun.png',
    title: 'Tortilla de Atún',
  },
];

export const createRecipeElement = (recipe) => {
  const recipeElement = document.createElement('div');
  recipeElement.classList.add('recipe');

  const img = document.createElement('img');
  img.src = recipe.imageUrl;
  img.alt = recipe.title;
  recipeElement.appendChild(img);

  const titleElement = document.createElement('h2');
  titleElement.textContent = recipe.title;
  recipeElement.appendChild(titleElement);

  return recipeElement;
};
