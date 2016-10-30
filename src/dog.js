class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Wah wah, Iam ${this.name}`;
  }
}

module.exports = Dog;
