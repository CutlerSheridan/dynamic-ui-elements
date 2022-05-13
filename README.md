# Dynamic UI Elements

## A small collection of pre-made functions to make your DOM elements more dynamic

### turnIntoDropdown(menuContainerElement)

In your HTML, create a structure like this:

```
<div class="dropdown">
    <div>Menu</div>
    <div>Entrées</div>
    <div>Sides</div>
    <div>Drinks</div>
    <div>Desserts</div>
</div>
```

Then pass it into the function and it will transform into a dynamic dropdown menu.

The following arguments can, in this order, be passed:

| Argument (= default)         | Description                                                                                   |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| menuContainerElement         | Required. The DOM element that will become a dropdown                                         |
| toggleDash (= false)         | If true, the label toggles between the text content and the material icon ligature for a dash |
| transitionTime (= "0.2s")    | Customize the transition time                                                                 |
| transitionStyle (= "linear") | Customize the transition style                                                                |

### makeNavBarDisappearWhenScrollingDown(navElement)

Pass any DOM element situated at the top of the page and transform it so, when a user scrolls down, it slides up and disappears, and when a user scrolls up, it slides back into view.

Accepts the following arguments:

| Argument (= default)         | Description                               |
| ---------------------------- | ----------------------------------------- |
| navElement                   | Required. The DOM element to make dynamic |
| transitionTime (= "0.2s")    | Customize the transition time             |
| transitionStyle (= "linear") | Customize the transition style            |

### createCarousel()

Pass an array of file paths leading to images and get an image carousel.

Accepts the following arguments:

| Argument (= default)         | Description                            |
| ---------------------------- | -------------------------------------- |
| imgFilesArray                | Required. An array of image file paths |
| carouselWidth (= "50%")      | Customize the width of the carousel    |
| transitionTime (= "0.3s")    | Customize the transition time          |
| transitionStyle (= "linear") | Customize the transition style         |

#### TO-DO NEXT

-   add dots underneath that indicate which one you're on and are clickable to navigate

#### TO-DO LATER

##### Features

##### Behavior

-   make arrows invisible unless you're hovering over image (what about mobile though? should they always be visible or to the sides?)
-   make image a link to the image file
-   make it switch every five seconds using a while loop that adds an inner event listener (that only triggers once) for the next/previous buttons to break the loop and stop transitioning every five seconds
-   fix dropdown alignment

#### DONE

-   _0.2.1_
-   make carousel pixel-perfect
-   add optional parameters for carousel
-   clean up carousel code
-   _0.2.0_
-   write image carousel creation function
-   add next button to swipe right
-   extract some logic into another function to reuse for previous button
-   add previous button to swipe left
-   _0.1.0_
-   create a function that makes DOM element disappear when scrolling down and reappear when scrolling up
-   _0.0.2_
-   add ability to toggle a dash when material icons are being used
-   _0.0.1_
-   create a function to turn DOM element into dropdown menu
