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
    title: 'Pasta de zucchini con salda de aguacate y atún',
    likes: [],
    ingredients: [
      '2 zucchinis (calabacín, zapallo) grandes, picado en bastones pequeños, si tienes “spiralizer”',
      '1 manojo de cilantro',
      '1 trozo de aguacate aprox. de 120-150 grs',
      '3 cucharadas de yogurt griego plain',
      'Sal y pimienta al gusto',
      'Ajo en polvo',
      '1 lata de atún al agua (140 gr aprox.)',
      '1 cucharadita de aceite de oliva extra virgen',
    ],
    steps: [
      'En la licuadora o procesador de alimentos mezclar: cilantro, aguacate, yogur griego, sal, pimienta y ajo en polvo.',
      'En un sartén precalentado agregar la cucharada de aceite de oliva extra virgen y cocinar el atún previamente escurrido, eliminar bien el agua.',
      'Agregamos la salsa hecha en el procesador, mezclar bien y dejar cocinar por 2 minutos.',
      'Agregar el Zucchini, bajamos el fuego y por unos 2 minutos más (no más que eso, porque el zucchini bota mucha agua), mezclar y cocinar con junto con la salsa, y está listo para servir.',
    ],
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
