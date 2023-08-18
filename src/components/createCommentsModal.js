import { getPosts, editPost, deletePost } from '../lib/index';
import { showConfirmationModal, showEditModal } from './showCustomEditDeleteComents';
// import { showCustomAlert } from './showCustomAlert';

export const openCommentsModal = () => {
  // Se crea el modal
  const modal = document.createElement('div');
  modal.className = 'posts-modal';

  // Crear el contenido del modal
  const content = document.createElement('div');
  content.className = 'modal-content';

  // Crear el botón de cerrar (x) y su evento
  const closeModalIcon = document.createElement('i');
  closeModalIcon.className = 'close-botton-modal fa-solid fa-xmark';
  closeModalIcon.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Lista para los comentarios
  const postsList = document.createElement('ul');
  postsList.className = 'posts-list';

  // Obtener todos los posts
  const posts = getPosts();

  posts.forEach((post) => {
    const postItem = document.createElement('li');
    postItem.className = 'li-postComents';

    const postText = document.createElement('p');
    postText.textContent = post.content;

    const editBtn = document.createElement('i');
    editBtn.className = 'fa-solid fa-pen-to-square';

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-trash-can';

    editBtn.addEventListener('click', () => {
      showEditModal(post.content, (newContent) => {
        editPost(post.id, newContent);
        postText.textContent = newContent;
      });
    });

    deleteBtn.addEventListener('click', () => {
      showConfirmationModal('¿Estás seguro de que deseas eliminar este comentario?', () => {
        deletePost(post.id);
        postsList.removeChild(postItem);
      });
    });

    postItem.append(postText, editBtn, deleteBtn);
    postsList.append(postItem);
  });

  const closeModal = () => {
    document.body.removeChild(modal);
  };

  modal.addEventListener('click', (e) => {
    // Si el clic fue directamente en el modal (y no en alguno de sus hijos),
    // significa que el usuario hizo clic fuera del contenido del modal
    if (e.target === modal) {
      closeModal();
    }
  });

  content.append(closeModalIcon, postsList);
  modal.append(content);

  // Agregar el modal al body
  document.body.append(modal);
};
