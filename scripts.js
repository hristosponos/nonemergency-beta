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