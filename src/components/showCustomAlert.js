export const showCustomAlert = (message) => {
  const alertDiv = document.createElement('div');
  alertDiv.setAttribute('id', 'customAlert');

  const alertContent = document.createElement('div');
  alertContent.classList.add('alert-content');

  const closeBtn = document.createElement('i');
  closeBtn.className = 'close fa-solid fa-circle-xmark';
  closeBtn.onclick = () => {
    document.body.removeChild(alertDiv);
  };

  const textDiv = document.createElement('div');
  textDiv.innerText = message;

  alertContent.append(closeBtn, textDiv);
  alertDiv.appendChild(alertContent);

  document.body.appendChild(alertDiv);
};
