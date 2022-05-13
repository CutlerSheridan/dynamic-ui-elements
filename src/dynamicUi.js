const turnIntoDropdown = (
    menuContainerElement,
    toggleDash = false,
    transitionTime = "0.2s",
    transitionStyle = "linear"
) => {
    menuContainerElement.classList.add("dropdown");
    menuContainerElement.style.transition = `all ${transitionTime} ${transitionStyle}`;

    const optionElements = [...menuContainerElement.children];
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add("dropdown-option");
        optionElements[i].style.width = "100%";
    }

    const tabHeight = optionElements[0].offsetHeight / 10;
    menuContainerElement.style.maxHeight = tabHeight + "rem";
    menuContainerElement.style.overflow = "hidden";
    const label = optionElements[0].textContent;

    optionElements[0].addEventListener("mousedown", () => {
        if (tabHeight + "rem" === menuContainerElement.style.maxHeight) {
            menuContainerElement.style.maxHeight =
                tabHeight * optionElements.length + "rem";
            if (toggleDash) {
                optionElements[0].classList.add("material-symbols-outlined");
                optionElements[0].textContent = "remove";
            }
        } else {
            menuContainerElement.style.maxHeight = tabHeight + "rem";
            if (toggleDash) {
                optionElements[0].classList.remove("material-symbols-outlined");
                optionElements[0].textContent = label;
            }
        }
        optionElements.forEach((element) => {
            element.classList.toggle("dropdown-option-active");
        });
    });
};

const makeNavbarDisappearWhenScrollingDown = (
    navElement,
    transitionTime = "0.2s",
    transitionStyle = "linear"
) => {
    navElement.style.transition = `all ${transitionTime} ${transitionStyle}`;
    navElement.style.top = 0;
    const navHeight = navElement.offsetHeight / 10;

    let startingPosition = window.scrollY;
    document.addEventListener("scroll", (e) => {
        if (window.scrollY > startingPosition && startingPosition > 0) {
            navElement.style.top = -1 * navHeight + "rem";
        } else if (window.scrollY < startingPosition) {
            navElement.style.top = "0";
        }
        startingPosition = window.scrollY;
    });
};

const createCarousel = (imgFilesArray, carouselWidth = "50%") => {
    const carouselContainer = document.createElement("div");
    carouselContainer.style.maxWidth = carouselWidth;
    carouselContainer.classList.add("carousel-container");
    const carousel = document.createElement("div");
    carousel.style.position = "relative";
    carousel.style.display = "flex";
    carousel.style.alignItems = "center";
    carousel.style.overflow = "hidden";
    carousel.classList.add("carousel");

    const carouselInner = _createInnerCarousel(imgFilesArray);
    carousel.append(carouselInner);
    carouselContainer.append(carousel);
    carousel.append(
        _createPreviousButton(carousel, carouselInner),
        _createNextButton(carousel, carouselInner)
    );

    let tempImgSelectorDots = "";
    for (let i = 0; i < imgFilesArray.length; i++) {
        tempImgSelectorDots += `+${i === imgFilesArray.length - 1 ? "" : " "}`;
    }

    carouselContainer.append(tempImgSelectorDots);
    return carouselContainer;
};
const _createInnerCarousel = (imgFilesArray) => {
    const carouselInner = document.createElement("div");
    carouselInner.style.position = "relative";
    carouselInner.style.left = "0";
    carouselInner.style.display = "flex";
    carouselInner.style.transition = "all .3s linear";
    carouselInner.classList.add("carousel-inner");

    imgFilesArray.forEach((file) => {
        const img = document.createElement("img");
        img.src = file;
        carouselInner.append(img);
        img.style.width = "100%";
    });

    return carouselInner;
};
const _createNextButton = (carousel, carouselInner) => {
    const nextBtn = _createButton(carousel);
    nextBtn.textContent = ">";
    nextBtn.style.right = "0";

    nextBtn.addEventListener("mousedown", () => {
        const newPosition = _findNewPosition(carouselInner, 1, (a, b) => a + b);
        carouselInner.style.left = -1 * newPosition + "px";
    });

    return nextBtn;
};
const _createPreviousButton = (carousel, carouselInner) => {
    const prevBtn = _createButton(carousel);
    prevBtn.textContent = "<";
    prevBtn.style.left = "0";

    prevBtn.addEventListener("mousedown", () => {
        const newPosition = _findNewPosition(
            carouselInner,
            -1,
            (a, b) => a - b
        );
        carouselInner.style.left = -1 * newPosition + "px";
    });
    return prevBtn;
};
const _createButton = (carousel) => {
    const btn = document.createElement("button");

    btn.style.position = "absolute";
    const size = 5;
    btn.style.height = size + "rem";
    btn.style.width = size + "rem";
    btn.style.opacity = "70%";
    btn.style.cursor = "pointer";

    return btn;
};
const _findNewPosition = (carouselInner, direction, func) => {
    const imgWidth = carouselInner.offsetWidth;
    const indexOfPx = carouselInner.style.left.indexOf("px");
    let currentPosition = +carouselInner.style.left.slice(0, indexOfPx);
    if (currentPosition < 0) {
        currentPosition *= -1;
    }

    currentPosition = func(currentPosition, imgWidth);
    const maxPosition = imgWidth * (carouselInner.children.length - 1);
    if (direction > 0) {
        if (currentPosition > maxPosition) {
            currentPosition = 0;
        }
    } else if (direction < 0) {
        if (currentPosition < 0) {
            currentPosition = maxPosition;
        }
    }
    return currentPosition;
};

export {
    turnIntoDropdown,
    makeNavbarDisappearWhenScrollingDown,
    createCarousel,
};
