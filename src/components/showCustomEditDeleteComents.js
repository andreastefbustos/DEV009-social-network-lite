import { showCustomAlert } from './showCustomAlert';

// Mostrar un modal de confirmación para eliminar el comentario
export const showConfirmationModal = (message, onConfirm) => {
  const confirmDiv = document.createElement('div');
  confirmDiv.setAttribute('id', 'customConfirmation');

  const confirmContent = document.createElement('div');
  confirmContent.classList.add('confirm-content');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'fa-solid fa-circle-xmark';
  closeBtn.id = 'close';
  closeBtn.onclick = () => {
    document.body.removeChild(confirmDiv);
  };

  const textConfirm = document.createElement('p');
  textConfirm.id = 'confirm-deleted';
  textConfirm.innerText = message;

  const confirmBtn = document.createElement('button');
  confirmBtn.id = 'delete-confirm-button';
  confirmBtn.innerText = 'Confirm';
  confirmBtn.onclick = () => {
    onConfirm();
    document.body.removeChild(confirmDiv);
  };

  confirmContent.append(closeBtn, textConfirm, confirmBtn);
  confirmDiv.appendChild(confirmContent);

  document.body.appendChild(confirmDiv);
};

// Mostar un modal de edición para editar el comentario
export const showEditModal = (defaultValue, onSave) => {
  const editDiv = document.createElement('div');
  editDiv.setAttribute('id', 'customEdit');

  const editContent = document.createElement('div');
  editContent.classList.add('edit-content');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'fa-solid fa-circle-xmark';
  closeBtn.id = 'close';
  closeBtn.onclick = () => {
    document.body.removeChild(editDiv);
  };

  const textarea = document.createElement('textarea');
  textarea.id = 'textarea-commentsAll';
  textarea.value = defaultValue;

  const saveBtn = document.createElement('button');
  saveBtn.id = 'save-button';
  saveBtn.innerText = 'Save';
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
