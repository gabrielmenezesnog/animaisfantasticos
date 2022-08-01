import SmoothScroll from './modules/linksScroll.js';
import Accordion from './modules/accordionList.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropDownMenu from './modules/dropDownMenu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';
import ScrollAnimation from './modules/scrollAnimation.js';

// instanciando um novo objeto da classe SmoothScroll
// o parâmetro é um querySelectorAll
const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

// instanciando um novo objeto da classe Accordion
// o parâmetro é um querySelectorAll
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnimation = new ScrollAnimation("[data-anime='scroll']");
scrollAnimation.init();

const dropDownMenu = new DropDownMenu('[data-dropdown]', 'active', [
  'touchstart',
  'click',
]);
dropDownMenu.init();

initMenuMobile();
initFuncionamento();
fetchAnimais(
  'https://gabrielmenezesnog.github.io/animaisfantasticos/json/animaisApi.json',
  '.numeros-grid',
);
initFetchBitcoin();
