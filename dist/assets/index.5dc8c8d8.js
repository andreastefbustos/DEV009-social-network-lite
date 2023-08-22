(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const imgEnsaladaAlkalina = "/assets/ensalada-alkalina.3b57c3a1.png";
const imgPastaCremosa = "/assets/pasta-cremosa.1b3ce0e4.png";
const imgPescado = "/assets/pescado.49c91ccf.png";
const imgTortillaAtun = "/assets/tortilla-atun.dd17dd53.png";
const imgAvenaProteica = "/assets/avena-proteica.ad364651.png";
const imgPanquecasAvena = "/assets/pancakes-avena.634cc85d.png";
const imgPanquecasCurcuma = "/assets/pancakes-curcuma.1dc2caaa.png";
const imgYogurtGriego = "/assets/yogurt-griego.45701a3b.png";
const recipes = [
  {
    id: 1,
    imageUrl: imgEnsaladaAlkalina,
    title: "Ensalada Alkalina",
    likes: [],
    comments: [],
    ingredients: [
      "1 Pepino pelado y picado en cubitos",
      "1 Tomate regular picado en cuadros o 1\u20442 taza de tomaticos cherry picados",
      "Aguacate (Palta) picado",
      "1\u20442 cebolla",
      "1 taza de garbanzos enlatados. (Puedes sustituir los garbanzos por cualquier otra opci\xF3n de legumbres como lentejas, frijoles etc...)",
      "1 cucharada de aceite de oliva, el jugo de 1 lim\xF3n, sal al gusto."
    ],
    steps: [
      "Mezclar todos los ingredientes junto con el aderezo y listo."
    ],
    flavors: "Salty",
    mealTime: "Lunch"
  },
  {
    id: 2,
    imageUrl: imgPastaCremosa,
    title: "Pasta de zucchini con at\xFAn",
    likes: [],
    comments: [],
    ingredients: [
      "2 zucchinis (calabac\xEDn, zapallo) grandes, picado en bastones peque\xF1os, si tienes \u201Cspiralizer\u201D",
      "1 manojo de cilantro",
      "1 trozo de aguacate aprox. de 120-150 grs",
      "3 cucharadas de yogurt griego plain",
      "Sal y pimienta al gusto",
      "Ajo en polvo",
      "1 lata de at\xFAn al agua (140 gr aprox.)",
      "1 cucharadita de aceite de oliva extra virgen"
    ],
    steps: [
      "En la licuadora o procesador de alimentos mezclar: cilantro, aguacate, yogur griego, sal, pimienta y ajo en polvo.",
      "En un sart\xE9n precalentado agregar la cucharada de aceite de oliva extra virgen y cocinar el at\xFAn previamente escurrido, eliminar bien el agua.",
      "Agregamos la salsa hecha en el procesador, mezclar bien y dejar cocinar por 2 minutos.",
      "Agregar el Zucchini, bajamos el fuego y por unos 2 minutos m\xE1s (no m\xE1s que eso, porque el zucchini bota mucha agua), mezclar y cocinar con junto con la salsa, y est\xE1 listo para servir."
    ],
    flavors: "Salty",
    mealTime: "Lunch"
  },
  {
    id: 3,
    imageUrl: imgPescado,
    title: "Pescado con aderezo y platano",
    likes: [],
    comments: [],
    ingredients: [
      "1 pieza de pescado 120 gr aprox, puede ser salm\xF3n o pescado fresco de tu preferencia",
      "50 gr aprox (1\u20442 platano aprox) de platano macho (amarillo no tan maduro). Picado en cubitos peque\xF1os",
      "1\u20444 de cebolla morada picada en cuadritos",
      "1\u20442 tomate picado en cuadritos",
      "Pepino picado en cuadritos",
      "Cilantro y/o perejil picado",
      "Aceite de oliva extra virgen",
      "El jugo de 1\u20442 lim\xF3n",
      "Sal y pimienta al gusto"
    ],
    steps: [
      "Cocina el pl\xE1tano en un sart\xE9n previamente engrasado, hasta que est\xE9 dorado y listo. Si tienes airfryer u horno tambi\xE9n lo puedes hacer ah\xED.",
      "Prepara tu pescado sencillo, con sal y pimienta. El sabor se le va a dar el aderezo. Puedes hacerlo al vapor, a la plancha, en el airfryer o al horno.",
      "En un bowl mezcla: El tomate, pepino, cilantro, cebolla y pl\xE1tano. Condimenta con 1 cucharadita de aceite de oliva extra virgen, Lim\xF3n, sal y pimienta.",
      "Coloca tu pescado en un plato y lo cubres por encima con el aderezo."
    ],
    flavors: "Salty",
    mealTime: "Dinner"
  },
  {
    id: 4,
    imageUrl: imgTortillaAtun,
    title: "Tortilla de At\xFAn",
    likes: [],
    comments: [],
    ingredients: [
      "1\u20442 cebolla picada",
      "Manojo de perejil picado",
      "2 huevos",
      "1 lata mediana de at\xFAn al agua (170 gr)",
      "Sal y pimienta al gusto",
      "Queso bajo en grasa al gusto (opcional)"
    ],
    steps: [
      "Mezcla todos los ingredientes.",
      "Precalienta un sart\xE9n a fuego medio, previamente engrasado.",
      "Vierte la mezcla expandiendo muy bien en forma de tortilla.",
      "Cocina por unos minutos.",
      "Cuando est\xE9 lista, agrega el queso bajo en grasa por encima."
    ],
    flavors: "Salty",
    mealTime: "Dinner"
  },
  {
    id: 5,
    imageUrl: imgAvenaProteica,
    title: "Avena Prot\xE9ica",
    likes: [],
    comments: [],
    ingredients: [
      "1/2 taza de avena",
      "1 1/2 de agua o leche de almendras sin az\xFAcar",
      "1 huevo entero m\xE1s 1 clara o 1 scoop de prote\xEDna en polvo",
      "stevia al gusto",
      "canela al gusto"
    ],
    steps: [
      "Coloca la avena con el agua a cocinar en una olla a fuego medio sin tapa",
      "Revuelve de vez en cuando",
      "Lleva a hervor, baja el fuego y cocina durante 2 minutos, apaga el fuego",
      "Con batidor de alambre agrega a la olla el huevo entero m\xE1s la clara o la prote\xEDna y revuelve vigorosamente hasta que los huevos se emulsionen con la avena",
      "Agrega la stevia y canela"
    ],
    flavors: "Sweet",
    mealTime: "Breakfast"
  },
  {
    id: 6,
    imageUrl: imgPanquecasAvena,
    title: "Pancakes de Avena",
    likes: [],
    comments: [],
    ingredients: [
      "1/2 taza de harina de trigo o de avena.",
      "1 cdta. de polvo para hornear.",
      "Pizca de sal.",
      "1 cda. de endilzante de tu preferencia.",
      "2 cda. colmadas de yogurt griego",
      "1 huevo",
      "1/4 de taza de leche"
    ],
    steps: [
      "Mezclar todos los ingredientes.",
      "Precalienta un sart\xE9n a fuego medio, previamente engrasado.",
      "Vierte la mezcla en el sart\xE9n haciendo la forma de pancakes.",
      "Cuando le comienzan a salir burbujas por encima verifica que esta dorada por debajo para voltear",
      "Sirve con banana, fresas o mantequilla de man\xED o almendras"
    ],
    flavors: "Sweet",
    mealTime: "Breakfast"
  },
  {
    id: 7,
    imageUrl: imgPanquecasCurcuma,
    title: "Pancakes de c\xFArcuma",
    likes: [],
    comments: [],
    ingredients: [
      "1 y 1\u20444 taza de harina de almendras, coco o mezcladas (se puede sustituir por harina de avena)",
      "1 cucharadita de polvo para hornear",
      "1 cucharadita vainilla. (opcional)",
      "1 huevo",
      "1\u20442 taza de leche de almendras, coco (cualquier leche vegetal que tengas sin az\xFAcar).",
      "1\u20442 cucharada de c\xFArcuma en polvo (o curcuma natural).",
      "1\u20442 cucharada de canela en polvo.",
      "1\u20444 cucharada de jengibre en polvo o natural",
      "2 cucharadas de edulcorante como stevia o monkfruit",
      "PARA EL TOPPING (OPCIONAL): 1\u20444 taza de yogurt sin az\xFAcar (griego), 1\u20444 taza de nueces picadas, Frutas al gusto opcionales"
    ],
    steps: [
      "Mezclar todos los ingredientes.",
      "Precalienta un sart\xE9n a fuego medio.",
      "Prepara las panquecas en la sart\xE9n, dejando de",
      "2-3 minutos que se hagan por un lado hasta que comiencen a aparecer burbujas por encima y voltear.",
      "Servir agregando el yogurt, las nueces y las frutas por encima."
    ],
    flavors: "Sweet",
    mealTime: "Breakfast"
  },
  {
    id: 8,
    imageUrl: imgYogurtGriego,
    title: "Bowl de yogurt griego",
    likes: [],
    comments: [],
    ingredients: [
      "1 yogurt griego \u201CPlain\u201D (sin az\xFAcar ni frutas o alm\xEDbar a\xF1adido).",
      "2-3 cucharadas de almendras fileteadas o trituradas tostadas (puedes tostarlas en un sart\xE9n a fuego medio hasta que doren, sin que se quemen mucho porque se amargan).",
      "Frutas: 1\u20442 taza de fresas/pi\xF1a o manzana (cualquiera de estas opciones).",
      "Para endulzar Stevia o Monkfruit."
    ],
    steps: [
      "En un bowl o plato hondo, agrega primero el yogurt, encima de un lado agrega las frutas picadas. Del otro las almendras."
    ],
    flavors: "Sweet",
    mealTime: "Breakfast"
  }
];
recipes.forEach((recipe) => {
  const likesFromLocalStorage = localStorage.getItem(`likes_${recipe.id}`);
  if (likesFromLocalStorage !== null) {
    recipe.likes = parseInt(likesFromLocalStorage, 10);
  }
});
const isUserLoggedIn = () => !!localStorage.getItem("user");
const createRecipeModal = (recipe) => {
  if (isUserLoggedIn()) {
    const modal = document.createElement("div");
    modal.className = "recipe-modal";
    const content = document.createElement("div");
    content.className = "modal-content";
    const closeModalIcon = document.createElement("i");
    closeModalIcon.className = "close-botton-modal fa-solid fa-xmark";
    closeModalIcon.addEventListener("click", () => {
      document.body.removeChild(modal);
    });
    const ingredientTitle = document.createElement("h1");
    ingredientTitle.textContent = "Ingredientes";
    const ingredientsList = document.createElement("ul");
    ingredientsList.className = "ingredients";
    recipe.ingredients.forEach((ingredient) => {
      const ingredientItem = document.createElement("li");
      ingredientItem.textContent = ingredient;
      ingredientsList.appendChild(ingredientItem);
    });
    const stepTitle = document.createElement("h1");
    stepTitle.textContent = "Preparaci\xF3n";
    const stepsList = document.createElement("ol");
    stepsList.className = "steps";
    recipe.steps.forEach((step) => {
      const stepItem = document.createElement("li");
      stepItem.textContent = step;
      stepsList.appendChild(stepItem);
    });
    content.append(closeModalIcon, ingredientTitle, ingredientsList, stepTitle, stepsList);
    modal.append(content);
    document.body.append(modal);
  }
};
const login$1 = (email, password) => {
  const usersStr = localStorage.getItem("users");
  if (usersStr) {
    const users = JSON.parse(usersStr);
    const user = users.find((user2) => user2.email === email && user2.password === password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
  } else {
    return false;
  }
};
const getLoggedInUser$1 = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};
const logout$1 = () => {
  localStorage.removeItem("user");
};
const register$1 = (email, password) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
  let users = [];
  const usersStr = localStorage.getItem("users");
  if (usersStr) {
    users = JSON.parse(usersStr);
  }
  const user = users.find((user2) => user2.email === email);
  if (user) {
    throw new Error("User already exists");
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
};
const getPosts$1 = () => {
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    return JSON.parse(postsStr);
  }
  return [];
};
const createPost$1 = (content, email) => {
  if (content.length < 1) {
    throw new Error("Content must be at least 1 character long");
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
  const id = Math.random().toString(36).substr(2, 9);
  let posts = [];
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    posts = JSON.parse(postsStr);
  }
  posts.push({ id, content, email });
  localStorage.setItem("posts", JSON.stringify(posts));
  return id;
};
const editPost$1 = (idPost, content) => {
  if (content.length < 1) {
    throw new Error("Content must be at least 1 character long");
  }
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    const posts = JSON.parse(postsStr);
    const post = posts.find((post2) => post2.id === idPost);
    if (post) {
      post.content = content;
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      throw new Error("Post does not exist");
    }
  } else {
    throw new Error("Post does not exist");
  }
};
const deletePost$1 = (idPost) => {
  const postsStr = localStorage.getItem("posts");
  if (postsStr) {
    const posts = JSON.parse(postsStr);
    const post = posts.find((post2) => post2.id === idPost);
    if (post) {
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      throw new Error("Post does not exist");
    }
  } else {
    throw new Error("Post does not exist");
  }
};
const login = (email, password) => login$1(email, password);
const register = (email, password) => register$1(email, password);
const logout = () => logout$1();
const getLoggedInUser = () => getLoggedInUser$1();
const createPost = (content, userEmail) => createPost$1(content, userEmail);
const getPosts = () => getPosts$1();
const editPost = (idPost, content) => editPost$1(idPost, content);
const deletePost = (idPost) => deletePost$1(idPost);
const showCustomAlert = (message) => {
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("id", "customAlert");
  const alertContent = document.createElement("div");
  alertContent.classList.add("alert-content");
  const closeBtn = document.createElement("i");
  closeBtn.className = "close fa-solid fa-circle-xmark";
  closeBtn.onclick = () => {
    document.body.removeChild(alertDiv);
  };
  const textDiv = document.createElement("div");
  textDiv.innerText = message;
  alertContent.append(closeBtn, textDiv);
  alertDiv.appendChild(alertContent);
  document.body.appendChild(alertDiv);
};
const openCommentModal = (recipe) => {
  const modal = document.createElement("div");
  modal.className = "comment-modal";
  const content = document.createElement("div");
  content.className = "content-modal";
  const textareaContainer = document.createElement("div");
  textareaContainer.className = "container-textarea";
  const textarea = document.createElement("textarea");
  textarea.className = "content-textarea";
  textarea.placeholder = "Ingresa tu comentario...";
  const button = document.createElement("button");
  button.className = "post-button";
  button.textContent = "Post";
  button.addEventListener("click", () => {
    const userEmail = getLoggedInUser().email;
    try {
      const id = createPost(textarea.value, userEmail);
      const recipeComments = localStorage.getItem(`comments_${recipe.id}`);
      if (recipeComments) {
        const comments = JSON.parse(recipeComments);
        comments.ids.push(id);
        localStorage.setItem(`comments_${recipe.id}`, JSON.stringify(comments));
      } else {
        localStorage.setItem(`comments_${recipe.id}`, JSON.stringify({ ids: [id] }));
      }
      showCustomAlert("Comentario agregado!");
      document.body.removeChild(modal);
    } catch (error2) {
      showCustomAlert(error2.message);
    }
  });
  content.append(textarea, button);
  modal.append(content);
  document.body.append(modal);
  const closeModal = () => {
    document.body.removeChild(modal);
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
};
const showConfirmationModal = (message, onConfirm) => {
  const confirmDiv = document.createElement("div");
  confirmDiv.setAttribute("id", "customConfirmation");
  const confirmContent = document.createElement("div");
  confirmContent.classList.add("confirm-content");
  const closeBtn = document.createElement("i");
  closeBtn.className = "fa-solid fa-circle-xmark";
  closeBtn.id = "close";
  closeBtn.onclick = () => {
    document.body.removeChild(confirmDiv);
  };
  const textConfirm = document.createElement("p");
  textConfirm.id = "confirm-deleted";
  textConfirm.innerText = message;
  const confirmBtn = document.createElement("button");
  confirmBtn.id = "delete-confirm-button";
  confirmBtn.innerText = "Confirm";
  confirmBtn.onclick = () => {
    onConfirm();
    document.body.removeChild(confirmDiv);
  };
  confirmContent.append(closeBtn, textConfirm, confirmBtn);
  confirmDiv.appendChild(confirmContent);
  document.body.appendChild(confirmDiv);
};
const showEditModal = (defaultValue, onSave) => {
  const editDiv = document.createElement("div");
  editDiv.setAttribute("id", "customEdit");
  const editContent = document.createElement("div");
  editContent.classList.add("edit-content");
  const closeBtn = document.createElement("i");
  closeBtn.className = "fa-solid fa-circle-xmark";
  closeBtn.id = "close";
  closeBtn.onclick = () => {
    document.body.removeChild(editDiv);
  };
  const textarea = document.createElement("textarea");
  textarea.id = "textarea-commentsAll";
  textarea.value = defaultValue;
  const saveBtn = document.createElement("button");
  saveBtn.id = "save-button";
  saveBtn.innerText = "Save";
  saveBtn.onclick = () => {
    try {
      onSave(textarea.value);
      document.body.removeChild(editDiv);
    } catch (err) {
      showCustomAlert(err.message);
    }
  };
  editContent.append(closeBtn, textarea, saveBtn);
  editDiv.appendChild(editContent);
  document.body.appendChild(editDiv);
};
const openCommentsModal = (recipe) => {
  const modal = document.createElement("div");
  modal.className = "posts-modal";
  const content = document.createElement("div");
  content.className = "modal-content";
  const closeModalIcon = document.createElement("i");
  closeModalIcon.className = "close-botton-modal fa-solid fa-circle-xmark";
  closeModalIcon.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  const postsList = document.createElement("ul");
  postsList.className = "posts-list";
  const posts = getPosts();
  let commentsIds = [];
  const recipeComments = localStorage.getItem(`comments_${recipe.id}`);
  if (recipeComments) {
    const comments = JSON.parse(recipeComments);
    commentsIds = comments.ids;
  }
  if (commentsIds.length === 0 || posts.length === 0) {
    const messageNoComments = document.createElement("p");
    messageNoComments.textContent = "No hay comentarios!.";
    content.append(messageNoComments);
  } else {
    posts.forEach((post) => {
      if (!commentsIds.includes(post.id)) {
        return;
      }
      const currentUserEmail = getLoggedInUser().email;
      const postItem = document.createElement("li");
      postItem.className = "li-postComents";
      const postEmail = document.createElement("p");
      postEmail.className = "post-email";
      postEmail.textContent = post.email;
      const postText = document.createElement("p");
      postText.textContent = post.content;
      const editBtn = document.createElement("i");
      editBtn.className = "fa-solid fa-pen-to-square";
      const deleteBtn = document.createElement("i");
      deleteBtn.className = "fa-solid fa-trash-can";
      if (currentUserEmail === post.email) {
        editBtn.addEventListener("click", () => {
          showEditModal(post.content, (newContent) => {
            editPost(post.id, newContent);
            postText.textContent = newContent;
          });
        });
        deleteBtn.addEventListener("click", () => {
          showConfirmationModal("\xBFEst\xE1s seguro de que deseas eliminar este comentario?", () => {
            deletePost(post.id);
            postsList.removeChild(postItem);
          });
        });
        postItem.append(postEmail, postText, editBtn, deleteBtn);
      } else {
        postItem.append(postEmail, postText);
      }
      postsList.append(postItem);
    });
  }
  const closeModal = () => {
    document.body.removeChild(modal);
  };
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  content.append(closeModalIcon, postsList);
  modal.append(content);
  document.body.append(modal);
};
const handleInteractionForRecipe = (recipe, recipeElement) => {
  if (isUserLoggedIn()) {
    const userEmail = getLoggedInUser().email;
    const likesCount = document.createElement("span");
    likesCount.textContent = `${recipe.likes.length} Likes`;
    const likeButton = document.createElement("i");
    likeButton.className = "fa-regular fa-heart";
    if (recipe.likes.includes(userEmail)) {
      likeButton.classList.add("active");
    }
    likeButton.addEventListener("click", () => {
      if (likeButton.classList.contains("active")) {
        likeButton.classList.remove("active");
        const index = recipe.likes.indexOf(userEmail);
        if (index !== -1)
          recipe.likes.splice(index, 1);
      } else {
        likeButton.classList.add("active");
        recipe.likes.push(userEmail);
      }
      localStorage.setItem(`recipeLikes_${recipe.id}`, JSON.stringify(recipe.likes));
      likesCount.textContent = `${recipe.likes.length} Likes`;
    });
    const commentIcon = document.createElement("i");
    commentIcon.className = "fa-regular fa-comment";
    commentIcon.addEventListener("click", () => {
      openCommentModal(recipe);
    });
    const commentAll = document.createElement("p");
    commentAll.className = "commentPostAll";
    commentAll.textContent = "View all comments";
    commentAll.addEventListener("click", () => {
      openCommentsModal(recipe);
    });
    const iconsContainer = document.createElement("div");
    iconsContainer.className = "icons-container-likes-comments";
    const displayInformation = document.createElement("div");
    displayInformation.className = "display-information-likes-allComents";
    iconsContainer.append(likeButton, commentIcon);
    displayInformation.append(likesCount, commentAll);
    recipeElement.append(iconsContainer, displayInformation);
  }
};
const createRecipeElement = (recipe) => {
  const recipeElement = document.createElement("div");
  recipeElement.classList.add("recipe");
  const img = document.createElement("img");
  img.src = recipe.imageUrl;
  img.alt = recipe.title;
  const titleElement = document.createElement("h2");
  titleElement.classList.add("title-recipe");
  titleElement.textContent = recipe.title;
  titleElement.addEventListener("click", () => {
    createRecipeModal(recipe);
  });
  recipeElement.append(img, titleElement);
  handleInteractionForRecipe(recipe, recipeElement);
  return recipeElement;
};
const filterCategoryRecipe = (property, value) => {
  const categoryRecipe = recipes.filter((recipe) => recipe[property] === value);
  const recipesContainer = document.getElementsByClassName("recipes-container")[0];
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.lastChild);
  }
  categoryRecipe.forEach((element) => {
    const filterRecipe = createRecipeElement(element);
    recipesContainer.appendChild(filterRecipe);
  });
};
const createMenu = () => {
  const nav = document.createElement("nav");
  nav.classList.add("menu");
  const div1 = document.createElement("div");
  div1.id = "icon-menu";
  div1.innerHTML = '<i class="fa-solid fa-bars"></i>';
  const asideMenu = document.createElement("aside");
  asideMenu.classList.add("sidebar-menu");
  asideMenu.innerHTML = `
  <i class="close fa-solid fa-circle-xmark"></i>
  <h1 class="menu-title">Recipes</h1>
  <ul>
    <li id='all' class='category-item'>View All</li>
  </ul>

  <h1 class="menu-title">Flavors</h1>
  <ul>
    <li id='sweet' class='category-item'>Sweet</li>
    <li id='salty' class='category-item'>Salty</li>
    <li id='sweet-salty' class='category-item'>Sweet&Salty</li>
  </ul>

  <h1 class="menu-title">Meal Time</h1>
  <ul>
    <li id='breakfast' class='category-item'>Breakfast</li>
    <li id='lunch' class='category-item'>Lunch</li>
    <li id='dinner' class='category-item'>Dinner</li>
    <li id='snack' class='category-item'>Snack</li>
  </ul>
  `;
  const div2 = document.createElement("div");
  div2.classList.add("title-home");
  div2.innerHTML = "VitalDish";
  nav.append(div1, div2);
  document.body.appendChild(asideMenu);
  div1.addEventListener("click", () => {
    asideMenu.classList.toggle("open");
  });
  const closeMenuAside = document.querySelector(".close");
  closeMenuAside.addEventListener("click", () => {
    asideMenu.classList.remove("open");
  });
  const categoryFlavorsSweet = document.querySelector("#sweet");
  categoryFlavorsSweet.addEventListener("click", () => {
    filterCategoryRecipe("flavors", "Sweet");
    asideMenu.classList.remove("open");
  });
  const categoryFlavorsSalty = document.querySelector("#salty");
  categoryFlavorsSalty.addEventListener("click", () => {
    filterCategoryRecipe("flavors", "Salty");
    asideMenu.classList.remove("open");
  });
  const categoryFlavorsSweetSalty = document.querySelector("#sweet-salty");
  categoryFlavorsSweetSalty.addEventListener("click", () => {
    filterCategoryRecipe("flavors", "Sweet&Salty");
    asideMenu.classList.remove("open");
  });
  const categoryMealTimeBreakfast = document.querySelector("#breakfast");
  categoryMealTimeBreakfast.addEventListener("click", () => {
    filterCategoryRecipe("mealTime", "Breakfast");
    asideMenu.classList.remove("open");
  });
  const categoryMealTimeLunch = document.querySelector("#lunch");
  categoryMealTimeLunch.addEventListener("click", () => {
    filterCategoryRecipe("mealTime", "Lunch");
    asideMenu.classList.remove("open");
  });
  const categoryMealTimeDinner = document.querySelector("#dinner");
  categoryMealTimeDinner.addEventListener("click", () => {
    filterCategoryRecipe("mealTime", "Dinner");
    asideMenu.classList.remove("open");
  });
  const categoryMealTimeSnack = document.querySelector("#snack");
  categoryMealTimeSnack.addEventListener("click", () => {
    filterCategoryRecipe("mealTime", "Snack");
    asideMenu.classList.remove("open");
  });
  const viewAllRecipes = document.querySelector("#all");
  viewAllRecipes.addEventListener("click", () => {
    const recipesContainer = document.getElementsByClassName("recipes-container")[0];
    while (recipesContainer.firstChild) {
      recipesContainer.removeChild(recipesContainer.lastChild);
    }
    recipes.forEach((element) => {
      const allRecipes = createRecipeElement(element);
      recipesContainer.appendChild(allRecipes);
    });
    asideMenu.classList.remove("open");
  });
  return {
    navElement: nav,
    asideMenuElement: asideMenu
  };
};
const displayFilteredRecipes = (filteredRecipes) => {
  const recipesContainer = document.getElementsByClassName("recipes-container")[0];
  while (recipesContainer.firstChild) {
    recipesContainer.removeChild(recipesContainer.lastChild);
  }
  filteredRecipes.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe);
    recipesContainer.appendChild(recipeElement);
  });
};
const normalizeString = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const createSearchBar = () => {
  const search = document.createElement("div");
  search.classList.add("search");
  const div3 = document.createElement("div");
  div3.classList.add("search-icon");
  div3.innerHTML = '<i class="fa-solid fa-magnifying-glass">';
  const input = document.createElement("input");
  input.type = "search";
  input.id = "search-input";
  input.classList.add("search-input");
  input.placeholder = "Search...";
  input.style.display = "none";
  div3.addEventListener("click", () => {
    if (input.style.display === "none" || input.style.display === "") {
      input.style.display = "block";
      input.focus();
    } else {
      input.style.display = "none";
    }
  });
  input.addEventListener("input", (event) => {
    const query = normalizeString(event.target.value);
    const filteredRecipes = recipes.filter(
      (recipe) => normalizeString(recipe.title).includes(query)
    );
    displayFilteredRecipes(filteredRecipes);
  });
  search.append(div3, input);
  return search;
};
const handleLoginClick = (event, navigateTo2) => {
  event.preventDefault();
  if (isUserLoggedIn()) {
    logout();
    navigateTo2("/");
  } else {
    navigateTo2("/login");
  }
};
const createLoginArea = (navigateTo2) => {
  const login2 = document.createElement("div");
  login2.classList.add("login");
  const div4 = document.createElement("div");
  div4.innerHTML = '<i class="fa-regular fa-user"></i>';
  const loginLink = document.createElement("a");
  loginLink.id = "login-link";
  loginLink.href = "";
  const updateLoginLink = () => {
    if (isUserLoggedIn()) {
      loginLink.innerHTML = "Logout";
    } else {
      loginLink.innerHTML = "Login";
    }
  };
  updateLoginLink();
  loginLink.addEventListener("click", (event) => handleLoginClick(event, navigateTo2));
  login2.append(div4, loginLink);
  return login2;
};
const home = (navigateTo2) => {
  const homePage = document.createElement("div");
  const header = document.createElement("header");
  header.classList.add("header");
  const menuComponents = createMenu();
  const recipesContainer = document.createElement("div");
  recipesContainer.classList.add("recipes-container");
  recipes.forEach((recipe) => {
    const likesFromLocalStorage = JSON.parse(localStorage.getItem(`recipeLikes_${recipe.id}`));
    if (likesFromLocalStorage) {
      recipe.likes = likesFromLocalStorage;
    }
  });
  recipes.forEach((recipe) => {
    const recipeElement = createRecipeElement(recipe);
    recipesContainer.appendChild(recipeElement);
  });
  header.appendChild(menuComponents.navElement);
  header.appendChild(createSearchBar());
  header.appendChild(createLoginArea(navigateTo2));
  homePage.append(header, recipesContainer, menuComponents.asideMenuElement);
  return homePage;
};
const userLogin = (navigateTo2) => {
  const loginForm = document.createElement("div");
  loginForm.innerHTML = `
    <div id="login-content">
      <img id="img-login" src="../img/login.png" alt="login">
      <form id="login-form" autocomplete="off">
        <h1 id="title-login">VitalDish</h1>

        <div class="email-container">
            <p class="email-password">Email</p>
            <input type="email" id="email" placeholder="example@gmail.com" required />
        </div>

        <div class="password-container">
            <p class="email-password">Password</p>
            <input type="password" id="password" placeholder="*********" required />
        </div>

        <button type="submit">Login</button>
        <p id="join">Do not have an account? <span class="highlight">Join now</span></p>
      </form>
  </div>
`;
  loginForm.querySelector("#login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (login(email, password)) {
      navigateTo2("/");
    } else {
      showCustomAlert("Invalid login. Please register if you do not have an account.");
    }
  });
  loginForm.querySelector("#join").addEventListener("click", (event) => {
    event.preventDefault();
    navigateTo2("/register");
  });
  return loginForm;
};
const registerPage = (navigateTo2) => {
  const registerForm = document.createElement("div");
  registerForm.innerHTML = `
  <i class="close-register fa-solid fa-circle-xmark"></i>
  <div id="register">
    <div id="img-register"></div>
    <form id="register-form" autocomplete="off">
      <h1 id="register-title">Create an account</h1>
      
      <div class="input-group">
          <label for="register-name">Name</label>
          <input type="name" id="register-name" placeholder="M******" required/>
      </div>
      
      <div class="input-group">
          <label for="register-email">Email</label>
          <input type="email" id="register-email" placeholder="example@gmail.com" required />
      </div>
      
      <div class="input-group">
          <label for="register-password">Password</label>
          <input type="password" id="register-password" placeholder="*********" required />
      </div>
      
      <button type="submit">Register</button>
   </form>
</div>
`;
  registerForm.querySelector("#register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    try {
      if (register(email, password)) {
        showCustomAlert("User registered successfully!");
        navigateTo2("/login");
      }
    } catch (error2) {
      switch (error2.message) {
        case "Invalid email":
          showCustomAlert("Please enter a valid email.");
          break;
        case "Password must be at least 6 characters long":
          showCustomAlert("Password must be at least 6 characters long.");
          break;
        case "User already exists":
          showCustomAlert("This user is already registered. Please try logging in.");
          break;
        default:
          showCustomAlert("An error occurred during registration");
      }
    }
  });
  const closeButton = registerForm.querySelector(".close-register");
  closeButton.addEventListener("click", () => {
    navigateTo2("/login");
  });
  return registerForm;
};
const error = () => {
  const title = document.createElement("h2");
  title.textContent = "Error 404 page no found, please go to home";
  return title;
};
const root = document.getElementById("root");
const routes = [
  { path: "/", component: home },
  { path: "/login", component: userLogin },
  { path: "/register", component: registerPage },
  { path: "/error", component: error }
];
const defaultRoute = "/";
const navigateTo = (hash) => {
  const route = routes.find((routeFind) => routeFind.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );
    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo("/error");
  }
};
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
