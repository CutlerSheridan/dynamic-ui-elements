# Dynamic UI Elements

## A small collection of pre-made functions to make your DOM elements more dynamic

### createDropdown(menuContainerElement)

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

#### DONE

-   _0.1.0_
-   create a function that makes DOM element disappear when scrolling down and reappear when scrolling up
-   _0.0.2_
-   add ability to toggle a dash when material icons are being used
-   _0.0.1_
-   create a function to turn DOM element into dropdown menu
