import { createMenu } from './menu';
import { createSearchBar } from './searchBar';
import { createLoginArea } from './loginArea';

export const home = (navigateTo) => {
  const homePage = document.createElement('div');

  // Creando el header
  const header = document.createElement('header');
  header.classList.add('header');

  const menuComponents = createMenu();

  // Se añaden los elementos individuales al header
  header.appendChild(menuComponents.navElement);
  header.appendChild(createSearchBar());
  header.appendChild(createLoginArea(navigateTo));

  // Añade el header al cuerpo del documento
  homePage.appendChild(header);

  // Añade el asideMenu al body
  document.body.appendChild(menuComponents.asideMenuElement);

  return homePage;
};
