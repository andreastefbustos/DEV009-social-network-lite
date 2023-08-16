import { createPost, getLoggedInUser } from '../lib/index';

export const handleCommentForRecipes = (recipe, likeContainer) => {
  const commentIcon = document.createElement('i');
  commentIcon.className = 'fa-regular fa-comment'; // Asumiendo que usas FontAwesome y esta es la clase para la nube de comentario.

  commentIcon.addEventListener('click', () => {
    // Aquí manejas la lógica para crear un post.
    // Puede ser un prompt o algo más sofisticado para obtener el contenido del comentario.
    const content = prompt('Ingresa tu comentario:');

    if (content) {
      const userEmail = getLoggedInUser().email;
      createPost(content, userEmail);
      alert('Comentario agregado!');
    }
  });

  likeContainer.append(commentIcon);
};
