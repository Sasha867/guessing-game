class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.value = Math.round((this.min + this.max) / 2);
    return this.value;
  }

  lower() {
    this.max = this.value;
    return this.max;
  }

  greater() {
    this.min = this.value;
    return this.min;
  }
}

module.exports = GuessingGame;
