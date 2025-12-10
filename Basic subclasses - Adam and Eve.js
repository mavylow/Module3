class God {
  static create() {
    return [new Man("Adam"), new Woman("Eve")];
  }
}
class Human {
  constructor(name) {
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super(name);
    this.gender = "male";
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
    this.gender = "female";
  }
}
