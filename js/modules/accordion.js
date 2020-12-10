export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toogleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adicionar os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toogleAccordion(item));
    });
  }

  // Iniciar Função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item
      this.toogleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
