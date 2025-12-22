import { changePreview } from "./events.js";
const listImg = document.getElementById("container-img");

function addPhoto() {
  const state = {
    card: null,
    imgUrl: null,
    caption: null,
    id: listImg.firstChild.id - 1,
  };

  const form = document.querySelector("form");
  form.style.display = "flex";
  form.reset();

  state.card = document.createElement("figure");
  state.card.className = "list-img-element";
  state.card.id = `${state.id}`;
  state.caption = document.createElement("figcaption");

  const inputFileName = document.getElementById("filename");
  const inputPhoto = document.getElementById("image_uploads");
  const submit = document.querySelector(".submit");
  const closeBtn = document.querySelector(".close");

  inputFileName.addEventListener("change", handleCaptionChange);
  inputPhoto.addEventListener("change", handleInputPhoto);
  submit.addEventListener("click", onSubmit);
  closeBtn.addEventListener("click", onClose);

  function handleInputPhoto() {
    const files = inputPhoto.files;
    if (!files.length) return;

    const oldImg = state.card.querySelector("img");
    if (oldImg) {
      oldImg.remove();
      // URL.revokeObjectURL(state.imgUrl);
    }

    const img = document.createElement("img");
    state.imgUrl = URL.createObjectURL(files[0]);
    img.src = state.imgUrl;

    if (!state.caption.textContent) {
      state.caption.textContent = state.caption.textContent || files[0].name;
    }

    state.card.append(img);
  }

  function handleCaptionChange(e) {
    state.caption.textContent = e.target.value;
  }

  function onSubmit() {
    if (!state.card.querySelector("img")) return;

    state.card.append(state.caption);
    listImg.prepend(state.card);
    changePreview(state.card);
    cleanup();
  }

  function onClose() {
    cleanup();
  }

  function cleanup() {
    inputFileName.removeEventListener("change", handleCaptionChange);
    inputPhoto.removeEventListener("change", handleInputPhoto);
    submit.removeEventListener("click", onSubmit);
    closeBtn.removeEventListener("click", onClose);

    if (state.imgUrl) {
      // URL.revokeObjectURL(state.imgUrl);
    }

    form.style.display = "none";
  }
}

export { addPhoto };
