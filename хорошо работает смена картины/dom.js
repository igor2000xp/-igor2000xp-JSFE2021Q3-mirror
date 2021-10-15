// EXPLORE SLIDER

function initComparisons() {
    var x, i;
    x = document.getElementsByClassName("img-overlay");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }

    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      w = img.offsetWidth;
      h = img.offsetHeight;
      img.style.width = (w / 2) + "px";

      slider = document.createElement("DIV");
      slider.setAttribute("class", "explore-slider");
      img.parentElement.insertBefore(slider, img);
      slider.style.top = '14.5px';
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchstop", slideFinish);
      
      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }

      function slideFinish() {
        clicked = 0;
      }

      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }

      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }

      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
}

initComparisons();

// WELCOME

let sliderNums = document.querySelector('.slider-control--nums');
let sliderPoints = document.querySelectorAll('.point');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let slideIndex = 1;

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('slide');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.animation = 'fade 2s';
    sliderPoints[slideIndex - 1].style.backgroundColor = "#D2B183";
}

showSlides(slideIndex);

const nextSlide = () => {
    showSlides(slideIndex += 1);
    sliderNums.textContent = `0${slideIndex} | 05`;
    sliderPoints[slideIndex - 2].style.backgroundColor = "white";
}
arrowRight.addEventListener('click', nextSlide);


const previousSlide = () => {
    showSlides(slideIndex -= 1);
    sliderNums.textContent = `0${slideIndex} | 05`;
    sliderPoints[slideIndex].style.backgroundColor = "white";
}
arrowLeft.addEventListener('click', previousSlide);

// EXTRA

document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.back-to-top');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});

// VIDEO PLAYER

const video = document.getElementById("videoPlayer");
    playBigBtn = document.querySelector('.play-button'),
    playBtn = document.querySelector('.btn-play'),
    pauseBtn = document.querySelector('.btn-pause'),
    volumeBtn = document.querySelector('.btn-volume'),
    progress = document.querySelector('.progress');
      
function play() {
    video.play();
    playBigBtn.style.display = 'none';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pause() {
    video.pause();
    playBigBtn.style.display = 'block';
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function muteVolume() {
    video.volume = this.value / 100;
    if (this.value == 0) {
      volumeBtn.style.display = 'none';

    } else {
      volumeBtn.classList.remove('btn-mute');
    }
}


function stop() {
    video.pause();
    video.currentTime = 0;
}

function progressLoop() {
    setInterval(function () {
        progress.value = Math.round(
        (video.currentTime / video.duration) * 100
      );
    });
}

playBigBtn.addEventListener('click', play);
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
video.addEventListener('click', play);
video.addEventListener('click', pause);

progressLoop();



console.log('Доброго времени суток! К сожалению, работа еще в процессе. Если у вас будет возможность проверить ее завтра, было бы здорово!')