/* option for jshint esnext https://software.intel.com/en-us/forums/intel-xdk/topic/560783*/

/*jshint esnext: true */


//слайдер

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("container_slideshow-slides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//тень для меню при скроллинге
const getBodyScrollTop = function () {
    const header = document.getElementsByClassName("container_header")[0];
    let offset = this.pageYOffset;
    //если проскролили на 150 то добавляем класс scroll
    if (offset > 150) {
        header.classList.add("scroll");
    }
    //для меню в самом верху страницы класс удаляем
    if (offset === 0) {
        header.classList.remove("scroll");
    }
};

window.addEventListener("scroll", getBodyScrollTop.bind(this), false);

//карта & HTML5 API Geolacation
function initMap() {
    const lat = 53.0649906;
    const lon = 158.6442063;
    const latlon = new google.maps.LatLng(lat, lon);
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 53.0649906,
            lng: 158.6442063
        },
        zoom: 18,
        marker: true
    });
    const marker = new google.maps.Marker({
        position: latlon,
        map: map,
        title: "Петропавловск-Камчатский, проспект Академика Королева, 67"
    });

}
initMap();
