const photoUrl = Array.from({ length: 100 }, (_, i) => {
  return {
    url: `assets/img/photo/${(i % 7) + 1}.jpeg`,
    caption: `${(i % 7) + 1}.jpeg`,
  };
});

const listImg = document.getElementById("container-img");

photoUrl.forEach((el) => {
  const figure = document.createElement("figure");
  figure.className = "list-img-element";
  const img = document.createElement("img");
  img.src = el.url;
  const figCaption = document.createElement("figcaption");
  figCaption.innerHTML = el.caption;
  figure.append(img);
  figure.append(figCaption);
  listImg.append(figure);
});
