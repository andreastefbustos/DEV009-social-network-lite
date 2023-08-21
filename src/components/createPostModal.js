import { createPost, getLoggedInUser } from '../lib/index';
import { showCustomAlert } from './showCustomAlert';

export const openCommentModal = (recipe) => {
  // Crear el modal
  const modal = document.createElement('div');
  modal.className = 'comment-modal';

  // Crear contenido del modal
  const content = document.createElement('div');
  content.className = 'content-modal';

  const textareaContainer = document.createElement('div');
  textareaContainer.className = 'container-textarea';

  const textarea = document.createElement('textarea');
  textarea.className = 'content-textarea';
  textarea.placeholder = 'Ingresa tu comentario...';

  const button = document.createElement('button');
  button.className = 'post-button';
  button.textContent = 'Post';

  button.addEventListener('click', () => {
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

      showCustomAlert('Comentario agregado!');
      // Cerrar el modal después de publicar el comentario
      document.body.removeChild(modal);
    } catch (error) {
      showCustomAlert(error.message);
    }
  });

  content.append(textarea, button);
  modal.append(content);

  // Agregar el modal al body
  document.body.append(modal);

  // Función para cerrar el modal
  const closeModal = () => {
    document.body.removeChild(modal);
  };

  // Escuchar clics en el modal
  modal.addEventListener('click', (e) => {
    // Si el clic fue directamente en el modal (y no en alguno de sus hijos),
    // significa que el usuario hizo clic fuera del contenido del modal
    if (e.target === modal) {
      closeModal();
    }
  });
};
