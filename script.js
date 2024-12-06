"use strict";

// Selecting All ements that we need

const showButtons = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// write a function for close model

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Write function for open modal

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// calling eventlistener on every button through loop

showButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

// closing the popup and over lay

closeButton.addEventListener("click", closeModal);

// closing the popup and over lay

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  // if (e.key === "Escape") closeModal();

  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
