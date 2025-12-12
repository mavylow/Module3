const preview = document.getElementById("preview");

function changePreview(card) {
  document.querySelectorAll(".list-img-element.active").forEach((card) => {
    card.classList.remove("active");
  });
  card.classList.add("active");
  closePreview.style.display = "block";
  const previewCard = card.cloneNode(true);
  previewCard.id = `${card.id}-preview`;
  previewCard.className = "preview-card";
  preview.innerHTML = "";
  preview.append(previewCard);
}
function resetPreview() {
  preview.innerHTML = "";
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
export { handleEvent };
