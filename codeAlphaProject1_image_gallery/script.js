let slideIndex = 1;

// Open lightbox
function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
    showSlide(slideIndex);
}

// Close lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Next/previous controls
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Current slide
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Display the slide
function showSlide(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
