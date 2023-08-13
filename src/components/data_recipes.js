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
