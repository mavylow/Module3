import { Paginator } from "./paginator.js";
import { photoUrl } from "./consts.js";

let nextPage = 2;
const ITEMS_PER_PAGE = 17;
const ITEMS_COUNT = 150;
const photos = new Paginator(photoUrl(ITEMS_COUNT), ITEMS_PER_PAGE);
const listImg = document.getElementById("container-img");
const preview = document.getElementById("preview");
const activeCardId = null;

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
listImg.addEventListener("click", (e) => {
  const card = e.target.closest(".list-img-element");
  if (!card) return;
  changePreview(card);
});

listImg.addEventListener("mousedown", (e) => {
  const [x, y] = [e.clientX, e.clientY];
  const card = e.target.closest(".list-img-element");
  if (!card) return;

  const copyOfCard = card.cloneNode(true);
  copyOfCard.id = `${card.id}-copy`;

  copyOfCard.style.position = "fixed";
  copyOfCard.style.zIndex = 1000;
  copyOfCard.style.opacity = "0.8";

  document.body.append(copyOfCard);

  function moveCard(pageX, pageY) {
    copyOfCard.style.left = pageX - copyOfCard.offsetWidth / 2 + "px";
    copyOfCard.style.top = pageY - copyOfCard.offsetHeight / 2 + "px";
  }

  //moveCard(e.pageX, e.pageY);

  document.addEventListener("mousemove", onMouseMove);

  function onMouseMove(e) {
    moveCard(e.pageX, e.pageY);
  }

  function onMouseUp(e) {
    const preview = document.getElementById("preview");
    const previewRect = preview.getBoundingClientRect();

    if (
      e.clientX >= previewRect.left &&
      e.clientX <= previewRect.right &&
      e.clientY >= previewRect.top &&
      e.clientY <= previewRect.bottom
    ) {
      copyOfCard.remove();
      changePreview(card);
    } else if (Math.abs(e.clientX - x) <= 20 && Math.abs(e.clientY - y) <= 20) {
      copyOfCard.remove();
      changePreview(card);
    } else {
      copyOfCard.remove();
    }

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mouseup", onMouseUp);
});
loadPost();
function changePreview(card) {
  document.querySelectorAll(".list-img-element.active").forEach((card) => {
    card.classList.remove("active");
  });
  card.classList.add("active");
  const previewCard = card.cloneNode(true);
  previewCard.id = `${card.id}-preview`;
  previewCard.className = "preview-card";
  preview.innerHTML = "";
  preview.append(previewCard);
}
