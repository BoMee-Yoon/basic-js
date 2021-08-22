export default class MovingGun {
  constructor(coordinate) {
    this.coordinate = coordinate;
    this.$x = document.querySelector('.x');
    this.$y = document.querySelector('.y');
    this.$target = document.querySelector('.target');
    this.$coordinate = document.querySelector('.coordinate');

    this.#init();
  }

  #moveLines() {
    this.coordinate.setLocation(this.$x, 'top');
    this.coordinate.setLocation(this.$y, 'left');
  }

  #moveTarget() {
    this.coordinate.setLocation(this.$target);
  };

  #moveLabel() {
    this.coordinate.setLocation(this.$coordinate);
    this.$coordinate.textContent = this.coordinate.locationLabel;
  }
  
  #move() {
    this.#moveLines();
    this.#moveTarget();
    this.#moveLabel();
    window.requestAnimationFrame(this.#move.bind(this));
  }

  #init() {
    this.#move();
  }
}