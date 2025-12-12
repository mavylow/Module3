const listImg = document.getElementById("container-img");
const preview = document.getElementById("preview");
const resize = document.getElementById("resize");
let isResize = true;
const handleResize = () => {
  isResize = true;

  const mainWidth = document.querySelector("main").offsetWidth;
  function onResizeMove(e) {
    if (!isResize) return;
    const startX = resize.getBoundingClientRect().left;
    const minListWidth = mainWidth * 0.3;
    const minPreviewWidth = mainWidth * 0.2;

    const newListWidth =
      listImg.getBoundingClientRect().width - (startX - e.pageX);
    const newPreviewWidth =
      preview.getBoundingClientRect().width + (startX - e.pageX);
    if (newListWidth >= minListWidth && newPreviewWidth >= minPreviewWidth) {
      document.querySelector("main").style.gridTemplateColumns = `${
        (newListWidth / mainWidth) * 100
      }% 10px ${(newPreviewWidth / mainWidth) * 100}%`;
    }
  }
  if (isResize) document.addEventListener("mousemove", onResizeMove);
  function onResizeOver(e) {
    isResize = false;
    document.removeEventListener("mousemove", onResizeMove);
    document.removeEventListener("mouseup", onResizeOver);
  }
  document.addEventListener("mouseup", onResizeOver);
};
export { handleResize };
