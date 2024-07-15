

document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav li");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            item.classList.add("hover");
        });

        item.addEventListener("mouseleave", function() {
            item.classList.remove("hover");
        });
    });
});


