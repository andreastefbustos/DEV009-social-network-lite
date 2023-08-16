export const recipes = [
  {
    id: 1,
    imageUrl: '../img/recipes/ensalada-alkalina.png',
    title: 'Ensala Alkalina',
    likes: [],
    ingredients: [
      '1 Pepino pelado y picado en cubitos',
      '1 Tomate regular picado en cuadros o 1⁄2 taza de tomaticos cherry picados',
      'Aguacate (Palta) picado',
      '1⁄2 cebolla',
      '1 taza de garbanzos enlatados. (Puedes sustituir los garbanzos por cualquier otra opción de legumbres como lentejas, frijoles etc...)',
      '1 cucharada de aceite de oliva, el jugo de 1 limón, sal al gusto.',
    ],
    steps: [
      'Mezclar todos los ingredientes junto con el aderezo y listo.',
    ],
  },
  {
    id: 2,
    imageUrl: '../img/recipes/pasta-cremosa.png',
    title: 'Pasta cremosa',
    likes: [],
  },
  {
    id: 3,
    imageUrl: '../img/recipes/pescado.png',
    title: 'Pescado con aderezo y platano',
    likes: [],
  },
  {
    id: 4,
    imageUrl: '../img/recipes/tortilla-atun.png',
    title: 'Tortilla de Atún',
    likes: [],
  },
];

recipes.forEach((recipe) => {
  const likesFromLocalStorage = localStorage.getItem(`likes_${recipe.id}`);
  if (likesFromLocalStorage !== null) {
    recipe.likes = parseInt(likesFromLocalStorage, 10);
  }
});
