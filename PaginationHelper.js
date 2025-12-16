class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) {
      return -1;
    }
    if (
      pageIndex + 1 !== this.pageCount() ||
      this.itemCount() % this.itemsPerPage === 0
    ) {
      return this.itemsPerPage;
    }

    return this.itemCount() % this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    if (itemIndex + 1 > this.itemCount() || itemIndex < 0) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
