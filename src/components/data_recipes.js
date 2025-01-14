import imgEnsaladaAlkalina from '../img/recipes/ensalada-alkalina.png';
import imgPastaCremosa from '../img/recipes/pasta-cremosa.png';
import imgPescado from '../img/recipes/pescado.png';
import imgTortillaAtun from '../img/recipes/tortilla-atun.png';
import imgAvenaProteica from '../img/recipes/avena-proteica.png';
import imgPanquecasAvena from '../img/recipes/pancakes-avena.png';
import imgPanquecasCurcuma from '../img/recipes/pancakes-curcuma.png';
import imgYogurtGriego from '../img/recipes/yogurt-griego.png';

export const recipes = [
  {
    id: 1,
    imageUrl: imgEnsaladaAlkalina,
    title: 'Ensalada Alkalina',
    likes: [],
    comments: [],
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
    flavors: 'Salty',
    mealTime: 'Lunch',
  },
  {
    id: 2,
    imageUrl: imgPastaCremosa,
    title: 'Pasta de zucchini con atún',
    likes: [],
    comments: [],
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
    flavors: 'Salty',
    mealTime: 'Lunch',
  },
  {
    id: 3,
    imageUrl: imgPescado,
    title: 'Pescado con aderezo y platano',
    likes: [],
    comments: [],
    ingredients: [
      '1 pieza de pescado 120 gr aprox, puede ser salmón o pescado fresco de tu preferencia',
      '50 gr aprox (1⁄2 platano aprox) de platano macho (amarillo no tan maduro). Picado en cubitos pequeños',
      '1⁄4 de cebolla morada picada en cuadritos',
      '1⁄2 tomate picado en cuadritos',
      'Pepino picado en cuadritos',
      'Cilantro y/o perejil picado',
      'Aceite de oliva extra virgen',
      'El jugo de 1⁄2 limón',
      'Sal y pimienta al gusto',
    ],
    steps: [
      'Cocina el plátano en un sartén previamente engrasado, hasta que esté dorado y listo. Si tienes airfryer u horno también lo puedes hacer ahí.',
      'Prepara tu pescado sencillo, con sal y pimienta. El sabor se le va a dar el aderezo. Puedes hacerlo al vapor, a la plancha, en el airfryer o al horno.',
      'En un bowl mezcla: El tomate, pepino, cilantro, cebolla y plátano. Condimenta con 1 cucharadita de aceite de oliva extra virgen, Limón, sal y pimienta.',
      'Coloca tu pescado en un plato y lo cubres por encima con el aderezo.',
    ],
    flavors: 'Salty',
    mealTime: 'Dinner',
  },
  {
    id: 4,
    imageUrl: imgTortillaAtun,
    title: 'Tortilla de Atún',
    likes: [],
    comments: [],
    ingredients: [
      '1⁄2 cebolla picada',
      'Manojo de perejil picado',
      '2 huevos',
      '1 lata mediana de atún al agua (170 gr)',
      'Sal y pimienta al gusto',
      'Queso bajo en grasa al gusto (opcional)',
    ],
    steps: [
      'Mezcla todos los ingredientes.',
      'Precalienta un sartén a fuego medio, previamente engrasado.',
      'Vierte la mezcla expandiendo muy bien en forma de tortilla.',
      'Cocina por unos minutos.',
      'Cuando esté lista, agrega el queso bajo en grasa por encima.',
    ],
    flavors: 'Salty',
    mealTime: 'Dinner',
  },
  {
    id: 5,
    imageUrl: imgAvenaProteica,
    title: 'Avena Protéica',
    likes: [],
    comments: [],
    ingredients: [
      '1/2 taza de avena',
      '1 1/2 de agua o leche de almendras sin azúcar',
      '1 huevo entero más 1 clara o 1 scoop de proteína en polvo',
      'stevia al gusto',
      'canela al gusto',
    ],
    steps: [
      'Coloca la avena con el agua a cocinar en una olla a fuego medio sin tapa',
      'Revuelve de vez en cuando',
      'Lleva a hervor, baja el fuego y cocina durante 2 minutos, apaga el fuego',
      'Con batidor de alambre agrega a la olla el huevo entero más la clara o la proteína y revuelve vigorosamente hasta que los huevos se emulsionen con la avena',
      'Agrega la stevia y canela',
    ],
    flavors: 'Sweet',
    mealTime: 'Breakfast',
  },
  {
    id: 6,
    imageUrl: imgPanquecasAvena,
    title: 'Pancakes de Avena',
    likes: [],
    comments: [],
    ingredients: [
      '1/2 taza de harina de trigo o de avena.',
      '1 cdta. de polvo para hornear.',
      'Pizca de sal.',
      '1 cda. de endilzante de tu preferencia.',
      '2 cda. colmadas de yogurt griego',
      '1 huevo',
      '1/4 de taza de leche',
    ],
    steps: [
      'Mezclar todos los ingredientes.',
      'Precalienta un sartén a fuego medio, previamente engrasado.',
      'Vierte la mezcla en el sartén haciendo la forma de pancakes.',
      'Cuando le comienzan a salir burbujas por encima verifica que esta dorada por debajo para voltear',
      'Sirve con banana, fresas o mantequilla de maní o almendras',
    ],
    flavors: 'Sweet',
    mealTime: 'Breakfast',
  },
  {
    id: 7,
    imageUrl: imgPanquecasCurcuma,
    title: 'Pancakes de cúrcuma',
    likes: [],
    comments: [],
    ingredients: [
      '1 y 1⁄4 taza de harina de almendras, coco o mezcladas (se puede sustituir por harina de avena)',
      '1 cucharadita de polvo para hornear',
      '1 cucharadita vainilla. (opcional)',
      '1 huevo',
      '1⁄2 taza de leche de almendras, coco (cualquier leche vegetal que tengas sin azúcar).',
      '1⁄2 cucharada de cúrcuma en polvo (o curcuma natural).',
      '1⁄2 cucharada de canela en polvo.',
      '1⁄4 cucharada de jengibre en polvo o natural',
      '2 cucharadas de edulcorante como stevia o monkfruit',
      'PARA EL TOPPING (OPCIONAL): 1⁄4 taza de yogurt sin azúcar (griego), 1⁄4 taza de nueces picadas, Frutas al gusto opcionales',
    ],
    steps: [
      'Mezclar todos los ingredientes.',
      'Precalienta un sartén a fuego medio.',
      'Prepara las panquecas en la sartén, dejando de',
      '2-3 minutos que se hagan por un lado hasta que comiencen a aparecer burbujas por encima y voltear.',
      'Servir agregando el yogurt, las nueces y las frutas por encima.',
    ],
    flavors: 'Sweet',
    mealTime: 'Breakfast',
  },
  {
    id: 8,
    imageUrl: imgYogurtGriego,
    title: 'Bowl de yogurt griego',
    likes: [],
    comments: [],
    ingredients: [
      '1 yogurt griego “Plain” (sin azúcar ni frutas o almíbar añadido).',
      '2-3 cucharadas de almendras fileteadas o trituradas tostadas (puedes tostarlas en un sartén a fuego medio hasta que doren, sin que se quemen mucho porque se amargan).',
      'Frutas: 1⁄2 taza de fresas/piña o manzana (cualquiera de estas opciones).',
      'Para endulzar Stevia o Monkfruit.',
    ],
    steps: [
      'En un bowl o plato hondo, agrega primero el yogurt, encima de un lado agrega las frutas picadas. Del otro las almendras.',
    ],
    flavors: 'Sweet',
    mealTime: 'Breakfast',
  },
];

recipes.forEach((recipe) => {
  const likesFromLocalStorage = localStorage.getItem(`likes_${recipe.id}`);
  if (likesFromLocalStorage !== null) {
    recipe.likes = parseInt(likesFromLocalStorage, 10);
  }
});
