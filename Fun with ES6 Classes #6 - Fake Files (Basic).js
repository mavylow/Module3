class File {
  constructor(fullName, content) {
    Object.defineProperties(this, {
      fullName: { value: fullName, writable: false },
      filename: {
        value: fullName.slice(0, fullName.lastIndexOf(".")),
        writable: false,
      },
      extension: {
        value: fullName.slice(fullName.lastIndexOf(".") + 1),
        writable: false,
      },
      content: {
        value: content,
        writable: true,
      },
      lineIndex: {
        value: 0,
        writable: true,
      },
      charIndex: {
        value: 0,
        writable: true,
      },
    });
  }
  getContents() {
    return this.content;
  }
  write(line) {
    this.content += this.content ? `\n${line}` : `${line}`;
  }
  gets() {
    return this.content.split("\n")[this.lineIndex++];
  }
  getc() {
    return this.content.split("")[this.charIndex++];
  }
}
