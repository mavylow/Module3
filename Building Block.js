class Block {
  constructor([width, length, height]) {
    this.width = width;
    this.length = length;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume() {
    return this.height * this.length * this.width;
  }
  getSurfaceArea() {
    return (
      2 * (this.height * this.length) +
      2 * (this.length * this.width) +
      2 * (this.height * this.width)
    );
  }
}
