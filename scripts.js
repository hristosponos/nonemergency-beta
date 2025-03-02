// RENDER FIRST AND LAST IMAGES ON SCREEN VERTICAL CENTER

var first_element = document.querySelector('.image-showcase > *:first-child');
var offset = first_element.offsetHeight / 2; 
first_element.style.setProperty('--first-image-offset', `${offset}px`);

var last_element = document.querySelector('.image-showcase > *:last-child');
offset = last_element.offsetHeight / 2; 
last_element.style.setProperty('--last-image-offset', `${offset}px`);

// MOBILE BURGER MENU OPEN

const navigationOpen = document.getElementById("burger");
const navigationClose = document.getElementById("mob-nav-close");
const navigationWindow = document.getElementById("mob-nav-menu");

    // OPEN

navigationOpen.addEventListener("click", function() {
    navigationWindow.classList.add('activated');
});

    // CLOSE
navigationClose.addEventListener("click", function () {
    navigationWindow.classList.remove('activated');
});

// NEWSLETTER OPEN AND CLOSE FUNCTIONALTY

const openBtn = document.querySelectorAll(".newsletter-open");
const closeBtn = document.getElementById("newsletter-close");
const newsletter = document.getElementById("newsletter");
const overlay = document.getElementById("overlay");


    // OPEN

openBtn.forEach(element => {
  element.addEventListener("click", function() {
    newsletter.style.display = "block";

    // CLOSE MOBILE NAVIGATION MENU, IF OPEN
    if (navigationWindow.classList.contains("activated")){
        navigationWindow.classList.remove('activated');
    }
  });
});

    // CLOSE

closeBtn.addEventListener("click", function () {
    newsletter.style.display = "none";
});

overlay.addEventListener("click", function () {
    newsletter.style.display = "none";
});

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
