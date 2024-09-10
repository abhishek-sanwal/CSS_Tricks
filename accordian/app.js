// Javascript

"using strict";

let previouslyClickedButton = null;

const showFaq = (event) => {
  event.stopPropagation();
  // Get the current button
  const currentButton = event.currentTarget;

  // Handle the flag to expand or collapse
  handleFaq(currentButton, previouslyClickedButton === currentButton);
};

const handleFaq = (button, isSameButton) => {
  if (isSameButton) {
    // Collapse the current div
    const paragraphs = button.querySelectorAll("p");
    const images = button.querySelectorAll("img");
    button.classList.toggle("btn");
    handleDiv(paragraphs, images, false);
    previouslyClickedButton = null;
  } else {
    // Close previously expanded div
    if (previouslyClickedButton !== null) {
      const prevParagraphs = previouslyClickedButton.querySelectorAll("p");
      const prevImages = previouslyClickedButton.querySelectorAll("img");
      previouslyClickedButton.classList.toggle("btn");
      handleDiv(prevParagraphs, prevImages, false);
    }
    // Expand the current div
    const paragraphs = button.querySelectorAll("p");
    const images = button.querySelectorAll("img");
    handleDiv(paragraphs, images, true);
    button.classList.toggle("btn");
    previouslyClickedButton = button;
  }
};

const handleDiv = (paragraphs, images, flag) => {
  handleParagraphs(paragraphs, flag);
  handleImages(images, flag);
};

const handleParagraphs = (paras, flag) => {
  // flag True means Expand the div
  // Flag false means Collapse the div
  if (paras.length > 1) {
    paras[1].classList.toggle("data-hide", !flag);
    paras[1].classList.toggle("show", flag);
  }
};

const handleImages = (images, flag) => {
  // flag true means expand means change pics
  // flag false means collapse
  if (images.length > 0) images[0].classList.toggle("img-rotate", !flag);
};

document.addEventListener("DOMContentLoaded", () => {
  const nodes = document.querySelectorAll(".element-button");

  nodes.forEach((node) => {
    node.addEventListener("click", showFaq);
  });
});
