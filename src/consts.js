const ITEMS_PER_PAGE = 17;
const ITEMS_COUNT = 150;
const photoUrl = (length) =>
  Array.from({ length }, (_, i) => {
    return {
      id: i + 1,
      url: `assets/img/photo/${(i % 7) + 1}.jpeg`,
      caption: `${(i % 7) + 1}.jpeg`,
    };
  });

export { photoUrl, ITEMS_PER_PAGE, ITEMS_COUNT };
