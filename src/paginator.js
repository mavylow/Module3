class Paginator {
  constructor(content, elPerPage) {
    (this.content = content), (this.elPerPage = elPerPage);
    this.pages = Math.ceil(content.length / elPerPage);
  }
  getContentPerPage(pageIndex) {
    if (pageIndex > this.pages) {
      return null;
    }
    return this.content.slice(
      this.elPerPage * (pageIndex - 1),
      this.elPerPage * pageIndex
    );
  }
  setNewPhoto(photo) {
    this.content = [...this.content, photo];
  }
}
export { Paginator };
