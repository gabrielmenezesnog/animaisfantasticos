export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    // observerClass é o parâmetro em que deve ser passada
    // a classe a ser observada.
    this.observerClass = observerClass;

    // redireciona o this para que possa ser usado
    // referenciando sempre o objeto de SmoothScroll
    // e não o this de cada método. This = AnimaNumeros
    // (AnimaNumeros.addMutationObserver(), por exemplo)
    this.handleObserver = this.handleObserver.bind(this);
  }

  // recebe um elemento do dom com número em seu texto
  // incrementa a partir de 0 até o número final real
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 10 * Math.random());
  }

  // ativa incrementarNumero() para cada item (número) da array
  // de this.numeros (primeiro parâmetro do construtor)
  animaNumeros() {
    this.numeros.forEach((item) => {
      this.constructor.incrementarNumero(item);
    });
  }

  // Observer que ativará a função acima quando o usuário chegar
  // na seção da mesma.
  handleObserver(mutationRecord) {
    if (mutationRecord[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver() para verificar
  // quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
