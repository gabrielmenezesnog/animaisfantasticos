export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  // ao ser acionado, adiciona um avento de click
  // ao accordion clicado. Após isso, inicia o método
  // toggleAccordion() que adiciona ou remove a activeClass.
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // recebe como parâmetro um item único do forEach de
  // accordionList. Para este item, fará o toggle da activeClass
  // e após isso adicionara outra activeClass ao próximo elemento
  // do DOM.
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // inicia a função
  init() {
    if (this.accordionList.length) {
      // adiciona, através do método toggleAccordion(),
      // um activeClass ao primeiro item da accordionList.
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    // retornar o this é importante para poder utilizar
    // os métodos de accordionList na nova instância em script.js
    return this;
  }
}
