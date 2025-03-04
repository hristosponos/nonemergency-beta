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