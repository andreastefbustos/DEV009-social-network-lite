export const showCustomAlert = (message) => {
  const alertDiv = document.createElement('div');
  alertDiv.setAttribute('id', 'customAlert');

  const alertContent = document.createElement('div');
  alertContent.classList.add('alert-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = 'X';
  closeBtn.onclick = () => {
    document.body.removeChild(alertDiv);
  };

  const textDiv = document.createElement('div');
  textDiv.innerText = message;

  alertContent.append(closeBtn, textDiv);
  alertDiv.appendChild(alertContent);

  document.body.appendChild(alertDiv);
};
