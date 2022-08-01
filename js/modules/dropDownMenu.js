import outsideClick from './outsideClick.js';

export default class DropDownMenu {
  constructor(dropDownMenus, activeClass, events) {
    this.dropDownMenu = document.querySelectorAll(dropDownMenus);
    this.activeClass = activeClass;
    // define touchstart e click como argumento padrão de events
    // caso o usuário não o defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdown e adiciona a função
  // que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const target = event.currentTarget;
    target.classList.add(this.activeClass);
    outsideClick(target, this.events, () => {
      target.classList.remove(this.activeClass);
    });
  }

  addDropDownMenusEvent() {
    this.dropDownMenu.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenu.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
