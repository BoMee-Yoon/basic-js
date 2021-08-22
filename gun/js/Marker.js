export default class Marker {
  constructor(coordinate) {
    this.coordinate = coordinate;

    this.$body = document.querySelector('body');
    this.$div = document.createElement('div');

    this.#init();
  }

  #createElement() {
    this.$div.classList.add('active');
    this.coordinate.setLocation(this.$div);

    this.$body.appendChild(this.$div);
  }
  
  #removeElement() {
    this.$div.remove();
  }

  #bindEvents() {
    document.addEventListener('click', this.#createElement.bind(this));
    this.$div.addEventListener('mouseleave', this.#removeElement.bind(this));
  }

  #init() {
    this.#bindEvents();
  }
}