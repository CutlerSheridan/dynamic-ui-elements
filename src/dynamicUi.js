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

const createCarousel = (
    imgFilesArray,
    carouselWidth = "50%",
    transitionTime = ".3s",
    transitionStyle = "linear"
) => {
    const carouselContainer = document.createElement("div");
    carouselContainer.style.display = "flex";
    carouselContainer.style.flexDirection = "column";
    carouselContainer.style.alignItems = "center";
    carouselContainer.style.maxWidth = carouselWidth;
    carouselContainer.classList.add("carousel-container");
    const carousel = document.createElement("div");
    carousel.style.position = "relative";
    carousel.style.display = "flex";
    carousel.style.alignItems = "center";
    carousel.style.overflow = "hidden";
    carousel.classList.add("carousel");

    const carouselInner = _createInnerCarousel(
        imgFilesArray,
        transitionTime,
        transitionStyle
    );
    carousel.append(carouselInner);
    carouselContainer.append(carousel);
    carousel.append(
        _createPreviousButton(carouselInner),
        _createNextButton(carouselInner)
    );

    carouselContainer.append(_createNavDots(carouselInner));
    return carouselContainer;
};
const _createInnerCarousel = (
    imgFilesArray,
    transitionTime,
    transitionStyle
) => {
    const carouselInner = document.createElement("div");
    carouselInner.style.position = "relative";
    carouselInner.style.left = "0";
    carouselInner.style.display = "flex";
    carouselInner.style.transition = `all ${transitionTime} ${transitionStyle}`;
    carouselInner.classList.add("carousel-inner");

    imgFilesArray.forEach((file) => {
        const img = document.createElement("img");
        img.src = file;
        carouselInner.append(img);
        img.style.width = "100%";
    });

    return carouselInner;
};
const _createNavDots = (carouselInner) => {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("carousel-dot-container");
    const imgs = carouselInner.children;
    for (let i = 0; i < imgs.length; i++) {
        const dot = _createDot();
        dot.dataset.index = i;
        dotContainer.append(dot);
        if (i === 0) {
            dot.classList.add("carousel-dot-active");
        }
    }
    dotContainer.style.margin = "1rem 0";
    dotContainer.style.display = "flex";
    dotContainer.style.gap = ".5rem";

    return dotContainer;
};
const _createDot = () => {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    const size = 1.25;
    dot.style.height = size + "rem";
    dot.style.width = size + "rem";
    dot.style.borderRadius = "1rem";
    dot.style.transition = "all .18s linear";
    return dot;
};
const _createNextButton = (carouselInner) => {
    const nextBtn = _createButton();
    nextBtn.textContent = ">";
    nextBtn.style.right = "0";

    nextBtn.addEventListener("mousedown", () => {
        const newPosition = _findNewPosition(carouselInner, 1, (a, b) => a + b);
        carouselInner.style.left = newPosition + "px";

        _incrementActiveDot(carouselInner, (a) => a + 1);
    });

    return nextBtn;
};
const _createPreviousButton = (carouselInner) => {
    const prevBtn = _createButton();
    prevBtn.textContent = "<";
    prevBtn.style.left = "0";

    prevBtn.addEventListener("mousedown", () => {
        const newPosition = _findNewPosition(
            carouselInner,
            -1,
            (a, b) => a - b
        );
        carouselInner.style.left = newPosition + "px";

        _incrementActiveDot(carouselInner, (a) => a - 1);
    });
    return prevBtn;
};
const _createButton = () => {
    const btn = document.createElement("button");

    btn.style.position = "absolute";
    const size = 6;
    btn.style.height = size + "rem";
    btn.style.width = size + "rem";
    btn.style.background = "black";
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.opacity = "50%";
    btn.style.cursor = "pointer";

    btn.addEventListener(
        "mouseenter",
        () => (btn.style.background = "rgb(30,30,30)")
    );
    btn.addEventListener("mouseleave", () => (btn.style.background = "black"));

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

    if (currentPosition > 0) {
        currentPosition *= -1;
    }
    return currentPosition;
};
const _incrementActiveDot = (carouselInner, incrementFunc) => {
    const carouselContainer = carouselInner.parentElement.parentElement;
    const carouselElements = [...carouselContainer.children];
    let dotContainer = carouselElements.find((el) =>
        el.classList.contains("carousel-dot-container")
    );
    const navDots = [...dotContainer.children];
    for (let i = 0; i < navDots.length; i++) {
        if (navDots[i].classList.contains("carousel-dot-active")) {
            navDots[i].classList.remove("carousel-dot-active");
            let nextDotIndex = incrementFunc(i) % navDots.length;
            if (nextDotIndex < 0) {
                nextDotIndex = navDots.length + nextDotIndex;
            }
            navDots[nextDotIndex].classList.add("carousel-dot-active");
            break;
        }
    }
};

export {
    turnIntoDropdown,
    makeNavbarDisappearWhenScrollingDown,
    createCarousel,
};
