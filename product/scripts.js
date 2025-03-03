// RENDER FIRST AND LAST IMAGES ON SCREEN VERTICAL CENTER

var first_element = document.querySelector('.image-showcase > *:first-child');
var offset = first_element.offsetHeight / 2; 
first_element.style.setProperty('--first-image-offset', `${offset}px`);

var last_element = document.querySelector('.image-showcase > *:last-child');
offset = last_element.offsetHeight / 2; 
last_element.style.setProperty('--last-image-offset', `${offset}px`);


// TOGGLE WINDOWS FUNCTION

function setupToggleWindow(toggleSelectors, windowSelectors) {
    const toggleElements = document.querySelectorAll(toggleSelectors);
    const windowElements = document.querySelectorAll(windowSelectors);

    if (toggleElements.length === 0 || windowElements.length === 0) {
        console.warn("No valid toggle or window elements found .");
        return;
    }

    toggleElements.forEach(toggleElement => {
        toggleElement.addEventListener("click", () => {
            windowElements.forEach(windowElement => {
                windowElement.classList.toggle("activated");
            });
        });
    });
}

// Newsletter toggle
setupToggleWindow(".newsletter-toggle", ".newsletter-window");

// Mobile navigation toggle
setupToggleWindow(".mob-nav-toggle", "#mob-nav-menu");

// Size chart toggle
setupToggleWindow(".size-chart-toggle", ".size-chart-window");

// REDIRECT TO STRIPE

const form = document.getElementById("buy-product-form");
const sizeSelect = document.getElementById("size");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    return;

    const selectedSize = sizeSelect.value;
    if (selectedSize=="not-selected") {
        alert("Please choose a size to continue to checkout.");
    } else if (selectedSize == "M"){
        window.location.href = 'https://buy.stripe.com/test_00gbITbbR0Xv7hC7st';
    } else if (selectedSize == "S"){
        window.location.href = 'https://buy.stripe.com/test_3cs28j7ZFbC931m6oo';
    }
});
