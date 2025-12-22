import { ITEMS_COUNT } from "./consts.js";
const preview = document.getElementById("preview");
const listImg = document.getElementById("container-img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const navigation = document.querySelector(".nav");
prev.addEventListener("click", (e) => {
  console.log(preview.lastChild.id);
  handleNavigation(e, +preview.lastChild.id.match(/-?\d+/g));
});
next.addEventListener("click", (e) => {
  console.log(preview.lastChild.id);
  handleNavigation(e, +preview.lastChild.id.match(/\d+/g));
});

function changePreview(card) {
  document.querySelectorAll(".list-img-element.active").forEach((card) => {
    card.classList.remove("active");
  });
  +card.id === +listImg.firstChild.id
    ? (prev.style.display = "none")
    : (prev.style.display = "block");

  +card.id === ITEMS_COUNT
    ? (next.style.display = "none")
    : (next.style.display = "block");
  console.log(+card.id);
  card.classList.add("active");
  closePreview.style.display = "block";
  document.querySelector(".preview-card")?.remove();
  navigation.style.visibility = "visible";
  const previewCard = card.cloneNode(true);
  previewCard.id = `${card.id}-preview`;
  previewCard.className = "preview-card";

  preview.append(previewCard);
}

function resetPreview() {
  document.querySelector(".preview-card")?.remove();
  navigation.style.display = "none";
  document.querySelectorAll(".list-img-element.active").forEach((card) => {
    card.classList.remove("active");
  });
  closePreview.style.display = "none";
}

const closePreview = document.querySelector(".close-button");
closePreview.addEventListener("click", resetPreview);

function handleEvent(e) {
  const [x, y] = [e.clientX, e.clientY];
  const card = e.target.closest(".list-img-element");
  if (!card) return;

  const copyOfCard = card.cloneNode(true);
  copyOfCard.id = `${card.id}-copy`;

  copyOfCard.style.position = "fixed";
  copyOfCard.style.zIndex = 1000;
  copyOfCard.style.opacity = "0.8";
  copyOfCard.style.width = card.getBoundingClientRect().width + "px";
  document.body.append(copyOfCard);
  const coordinates = document.createElement("div");
  coordinates.className = "coordinates";
  function moveCard(pageX, pageY) {
    coordinates.innerHTML = `x:${pageX},y:${pageX}`;
    document.body.append(coordinates);
    copyOfCard.style.left = pageX - copyOfCard.offsetWidth / 2 + "px";
    copyOfCard.style.top = pageY - copyOfCard.offsetHeight / 2 + "px";
  }

  document.addEventListener("mousemove", onMouseMove);

  function onMouseMove(e) {
    moveCard(e.pageX, e.pageY);
  }

  function onMouseUp(e) {
    coordinates.remove();
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
}
function handleNavigation(e, id) {
  if (e.target.name === "prev") {
    const prevCard = document.getElementById(`${id - 1}`);
    console.log(`${id - 1}`, prevCard);
    if (prevCard) {
      changePreview(prevCard);
    }
  }
  if (e.target.name === "next") {
    const nextCard = document.getElementById(`${id + 1}`);
    if (nextCard) {
      changePreview(nextCard);
    }
  }
}

export { handleEvent, changePreview };
