let toTopButton = document.getElementById("toTopBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

toTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});