const photoUrl = (length) =>
  Array.from({ length }, (_, i) => {
    return {
      id: i,
      url: `assets/img/photo/${(i % 7) + 1}.jpeg`,
      caption: `${(i % 7) + 1}.jpeg`,
    };
  });

export { photoUrl };
