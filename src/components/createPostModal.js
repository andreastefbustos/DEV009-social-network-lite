import { createPost, getLoggedInUser } from '../lib/index';
import { showCustomAlert } from './showCustomAlert';

export const openCommentModal = () => {
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
    createPost(textarea.value, userEmail);
    showCustomAlert('Comentario agregado!');
    // Cerrar el modal después de publicar el comentario
    document.body.removeChild(modal);
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
