class Typing {
  constructor(selector, sec) {
    this.selector = document.querySelector(selector);
    this.orgSelector = this.selector.innerHTML;
    this.fullSelector = "";
    this.sec = sec
    this.type();
  }
  type(num = 0) {
    this.fullSelector += this.orgSelector[num];
    this.selector.innerHTML = this.fullSelector;
    num++;
    if (this.orgSelector != this.fullSelector) {
      setTimeout(() => {
        this.type(num);
      }, this.sec);
    }
  }
}

let title = new Typing(".title", 100);
let text = new Typing(".text", 100);
