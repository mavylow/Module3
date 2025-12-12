import { Paginator } from "./paginator.js";
import { photoUrl } from "./consts.js";
import { clickAndDrag } from "./events.js";
import { handleResize } from "./resize.js";

let nextPage = 2;
const ITEMS_PER_PAGE = 17;
const ITEMS_COUNT = 150;
const photos = new Paginator(photoUrl(ITEMS_COUNT), ITEMS_PER_PAGE);
const listImg = document.getElementById("container-img");
const preview = document.getElementById("preview");
const resize = document.getElementById("resize");
const infiniteObserver = new IntersectionObserver(([entry], observer) => {
  if (entry.isIntersecting) {
    observer.unobserve(entry.target);
    if (nextPage <= photos.pages) loadPost(nextPage++);
    if (nextPage > photos.pages) {
      changeButtonVisibility();
    }
  }
}, {});

const loadPost = (page = 1) => {
  photos.getContentPerPage(page)?.forEach((el) => {
    const figure = document.createElement("figure");
    figure.className = "list-img-element";
    figure.id = el.id;
    const img = document.createElement("img");
    img.src = el.url;
    const figCaption = document.createElement("figcaption");
    figCaption.innerHTML = el.caption;
    figure.append(img);
    figure.append(figCaption);
    listImg.append(figure);
  });

  const lastFigure = document.querySelector(".list-img-element:last-child");
  if (lastFigure) {
    infiniteObserver.observe(lastFigure);
  }
};
const changeButtonVisibility = () => {
  const up = document.querySelector(".up-button");
  up.style.display = "block";
  up.addEventListener("click", () => {
    listImg.scrollTop = 0;
  });
};

listImg.addEventListener("mousedown", (e) => {
  clickAndDrag(e);
});

resize.addEventListener("mousedown", handleResize);
loadPost();
