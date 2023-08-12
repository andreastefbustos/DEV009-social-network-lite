export const createMenu = () => {
  const nav = document.createElement('nav');
  nav.classList.add('menu');

  const div1 = document.createElement('div');
  div1.id = 'icon-menu';
  div1.innerHTML = '<i class="fa-solid fa-bars"></i>';

  const asideMenu = document.createElement('aside');
  asideMenu.classList.add('sidebar-menu');
  asideMenu.innerHTML = `
  <h1 class="menu-title">Flavors</h1>
  <ul>
    <li id='sweet'>Sweet</li>
    <li id='salty'>Salty</li>
    <li id='sweet-salty'>Sweet&Salty</li>
  </ul>

  <h1 class="menu-title">Food Time</h1>
  <ul>
    <li id='breakfast'>Breakfast</li>
    <li id='lunch'>Lunch</li>
    <li id='dinner'>Dinner</li>
    <li id='snack'>Snack</li>
  </ul>
  `;

  const div2 = document.createElement('div');
  div2.classList.add('title-home');
  div2.innerHTML = 'VitalDish';

  nav.append(div1, div2);
  document.body.appendChild(asideMenu);

  // Funcionalidad para ocultar el menu
  div1.addEventListener('click', () => {
    asideMenu.classList.toggle('open');
  });

  // Ocultar el menú al hacer clic fuera de él
  document.addEventListener('click', (event) => {
    if (!asideMenu.contains(event.target) && !div1.contains(event.target)) {
      asideMenu.classList.remove('open');
    }
  });

  return {
    navElement: nav,
    asideMenuElement: asideMenu,
  };
};
