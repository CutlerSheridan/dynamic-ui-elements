import * as dynamicUi from "./dynamicUi.js";

dynamicUi.turnIntoDropdown(document.querySelector(".dropdown"), true);
dynamicUi.makeNavbarDisappearWhenScrollingDown(document.querySelector("nav"));

const imgs = [
    "./images/helmet.jpg",
    "./images/seluvis.jpg",
    "./images/sarah.jpg",
    "./images/erdtree.jpg",
    "./images/malenia.jpg",
    // "./images/helmet.jpg",
    // "./images/seluvis.jpg",
    // "./images/sarah.jpg",
    // "./images/erdtree.jpg",
    // "./images/malenia.jpg",
    // "./images/helmet.jpg",
    // "./images/seluvis.jpg",
    // "./images/sarah.jpg",
    // "./images/erdtree.jpg",
    // "./images/malenia.jpg",
];

const elementBeforeCarousel = document.querySelector(".space-after-navbar");
elementBeforeCarousel.after(dynamicUi.createCarousel(imgs));
