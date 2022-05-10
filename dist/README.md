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
| menuContainerElement         | Required. This is the DOM element that will become a dropdown                                 |
| toggleDash (= false)         | If true, the label toggles between the text content and the material icon ligature for a dash |
| transitionTime (= "0.2s")    | This can be used to customize the transition time                                             |
| transitionStyle (= "linear") | This can be used to customize the transition style                                            |

#### DONE

-   _0.0.2_
-   add ability to toggle a dash when material icons are being used
-   _0.0.1_
-   create a function to turn DOM element into dropdown menu
