import outsideClick from './outsideClick.js';

export default class MobileMenu {
  constructor(menuButton, menuList, activeClass, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    // define 'active' como argumento padrão de activeClass
    // caso o usuário não o defina
    if (activeClass === undefined) this.activeClass = 'active';
    else this.activeClass = activeClass;
    // define touchstart e click como argumento padrão de events
    // caso o usuário não o defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
