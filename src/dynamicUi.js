const createDropdown = (
    menuContainerElement,
    toggleDash = false,
    transitionTime = "0.2s",
    transitionStyle = "linear"
) => {
    menuContainerElement.classList.add("dropdown");
    menuContainerElement.style.transition = `all ${transitionTime} ${transitionStyle}`;

    const optionElements = menuContainerElement.children;
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add("dropdown-option");
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
        optionElements.forEach((element) =>
            element.classList.toggle("dropdown-option-active")
        );
    });
};

export { createDropdown };
