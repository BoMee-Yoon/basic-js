export default class Coordinate {
  constructor() {
    this._x = innerWidth / 2;
    this._y = innerHeight / 2;
    
    this.#init();
  }
  get locationLabel() {
    return `x 좌표: ${this._x}, y 좌표: ${this._y}`
  }

  setLocation($el, type = 'both') {
    const xStr = `${this._x}px`;
    const yStr = `${this._y}px`;

    switch(type) {
      case 'top':
        $el.style.top = yStr;
        break;
      case 'left':
        $el.style.left = xStr;
        break;
      default:
        $el.style.top = yStr;
        $el.style.left = xStr;
        break;
    }
  }

  #changeCoordinates({ clientX, clientY }) {
    this._x = clientX;
    this._y = clientY;
  }

  #init() {
    document.addEventListener('mousemove', this.#changeCoordinates.bind(this))
  }
}