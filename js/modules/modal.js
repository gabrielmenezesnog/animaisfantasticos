export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // redireciona o this para que possa ser usado
    // referenciando sempre o objeto de SmoothScroll
    // e não o this de cada método. This = Modal
    // (Modal.addModalEvent(), por exemplo)
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento toggleModal ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueFora(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueFora);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
