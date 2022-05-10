const createDropdown = (
    menuContainerElement,
    labelIsIcon = false,
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
    optionElements[0].addEventListener("mousedown", () => {
        if (tabHeight + "rem" === menuContainerElement.style.maxHeight) {
            menuContainerElement.style.maxHeight =
                tabHeight * optionElements.length + "rem";
        } else {
            menuContainerElement.style.maxHeight = tabHeight + "rem";
        }
        optionElements.forEach((element) =>
            element.classList.toggle("dropdown-option-active")
        );
    });
};

export { createDropdown };
