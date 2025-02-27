// RENDER FIRST AND LAST IMAGES ON SCREEN VERTICAL CENTER

window.onload = function() {
	var element = document.querySelector('.image-showcase > *:first-child');
	var elementHeight = element.offsetHeight / 2; 
	element.style.setProperty('--first-image-offset', `${elementHeight}px`);
	
	element = document.querySelector('.image-showcase > *:last-child');
	elementHeight = element.offsetHeight / 2; 
	element.style.setProperty('--last-image-offset', `${elementHeight}px`);
}

// NEWSLETTER OPEN AND CLOSE FEATURES

document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("newsletter-open");
    const closeBtn = document.getElementById("newsletter-close");
    const newsletter = document.getElementById("newsletter");
    const overlay = document.getElementById("overlay");

    // OPEN
    openBtn.addEventListener("click", function (event) {
        newsletter.style.display = "flex";
    });

    // CLOSE
    closeBtn.addEventListener("click", function () {
        newsletter.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        newsletter.style.display = "none";
    });

});

// REDIRECT TO STRIPE

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("buy-product-form");
    const sizeSelect = document.getElementById("size");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedSize = sizeSelect.value;
        if (selectedSize=="not-selected") {
            alert("Please choose a size to continue to checkout.");
        } else if (selectedSize == "M"){
            window.location.href = 'https://buy.stripe.com/test_00gbITbbR0Xv7hC7st';
        } else if (selectedSize == "S"){
            window.location.href = 'https://buy.stripe.com/test_3cs28j7ZFbC931m6oo';
        }
    });
});
