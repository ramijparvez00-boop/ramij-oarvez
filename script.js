/* =========================
   PHOTOS
========================= */

const photoFiles = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg"
];

const slideImage = document.getElementById("slideImage");
const slideCounter = document.getElementById("slideCounter");
const dots = document.getElementById("dots");

let currentSlide = 0;
let slideshowTimer;


/* Create dots */

photoFiles.forEach((_, index) => {

  const dot = document.createElement("div");

  dot.className = "dot";

  dot.addEventListener("click", () => {
    showSlide(index);
    restartSlideshow();
  });

  dots.appendChild(dot);

});


function showSlide(index) {

  currentSlide =
    (index + photoFiles.length) % photoFiles.length;

  slideImage.classList.remove("show");

  setTimeout(() => {

    slideImage.src =
      `assets/${photoFiles[currentSlide]}`;

    slideImage.classList.add("show");

    slideCounter.textContent =
      `${currentSlide + 1} / ${photoFiles.length}`;

  }, 250);


  document.querySelectorAll(".dot").forEach(
    (dot, i) => {
      dot.classList.toggle(
        "active",
        i === currentSlide
      );
    }
  );
}


/* Next */

function nextSlide() {

  showSlide(currentSlide + 1);

}


/* Previous */

function previousSlide() {

  showSlide(currentSlide - 1);

}


document
  .getElementById("nextBtn")
  .addEventListener("click", () => {

    nextSlide();
    restartSlideshow();

  });


document
  .getElementById("prevBtn")
  .addEventListener("click", () => {

    previousSlide();
    restartSlideshow();

  });


/* Auto slideshow */

function startSlideshow() {

  slideshowTimer = setInterval(() => {

    nextSlide();

  }, 4500);

}


function restartSlideshow() {

  clearInterval(slideshowTimer);

  startSlideshow();

}


/* Start */

showSlide(0);
startSlideshow();


/* =========================
   MUSIC
========================= */

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

let musicStarted = false;


async function startMusic() {

  try {

    await music.play();

    musicStarted = true;

    musicBtn.textContent = "❚❚";

  } catch (error) {

    console.log(
      "Music needs user interaction."
    );

  }

}


function toggleMusic() {

  if (music.paused) {

    startMusic();

  } else {

    music.pause();

    musicBtn.textContent = "♪";

  }

}


musicBtn.addEventListener(
  "click",
  toggleMusic
);


/* Open surprise */

document
  .getElementById("surpriseBtn")
  .addEventListener("click", () => {

    startMusic();

    document
      .getElementById("story")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


/* =========================
   CAKE
========================= */

const cakeBtn =
  document.getElementById("cakeBtn");

const cakeWrap =
  document.getElementById("cakeWrap");

const wish =
  document.getElementById("wish");

let cakeCut = false;


cakeBtn.addEventListener("click", () => {

  if (cakeCut) return;

  cakeCut = true;

  cakeWrap.classList.add("cut");

  cakeBtn.textContent =
    "Cake Cut! ❤️";

  wish.textContent =
    "Make a beautiful wish, Nadra… ❤️";

  startMusic();

  confetti();

  setTimeout(() => {

    moreHearts();

  }, 800);

});


/* =========================
   CONFETTI
========================= */

function confetti() {

  const symbols = [
    "💖",
    "✨",
    "🎉",
    "💕",
    "🌸",
    "💗",
    "🎊",
    "❤️"
  ];

  for (let i = 0; i < 90; i++) {

    const el =
      document.createElement("div");

    el.className = "heart";

    el.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    el.style.left =
      Math.random() * 100 + "vw";

    el.style.fontSize =
      12 + Math.random() * 25 + "px";

    el.style.animationDuration =
      3 + Math.random() * 5 + "s";

    el.style.animationDelay =
      Math.random() * .8 + "s";

    document.body.appendChild(el);

    setTimeout(() => {

      el.remove();

    }, 9000);

  }

}


/* Extra hearts */

function moreHearts() {

  for (let i = 0; i < 25; i++) {

    const el =
      document.createElement("div");

    el.className = "heart";

    el.textContent = "❤️";

    el.style.left =
      20 + Math.random() * 60 + "vw";

    el.style.fontSize =
      15 + Math.random() * 20 + "px";

    el.style.animationDuration =
      4 + Math.random() * 3 + "s";

    document.body.appendChild(el);

    setTimeout(() => {

      el.remove();

    }, 8000);

  }

}


/* =========================
   FLOATING HEARTS
========================= */

setInterval(() => {

  const el =
    document.createElement("div");

  el.className = "heart";

  el.textContent =
    ["♥", "♡", "✦"][
      Math.floor(
        Math.random() * 3
      )
    ];

  el.style.left =
    Math.random() * 100 + "vw";

  el.style.color =
    "#ff8fbe";

  el.style.fontSize =
    12 + Math.random() * 15 + "px";

  el.style.animationDuration =
    5 + Math.random() * 4 + "s";

  document.body.appendChild(el);

  setTimeout(() => {

    el.remove();

  }, 9000);

}, 900);


/* =========================
   TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

const slideFrame =
  document.getElementById("slideFrame");


slideFrame.addEventListener(
  "touchstart",
  (e) => {

    touchStartX =
      e.changedTouches[0].screenX;

  },
  { passive: true }
);


slideFrame.addEventListener(
  "touchend",
  (e) => {

    touchEndX =
      e.changedTouches[0].screenX;

    const distance =
      touchEndX - touchStartX;

    if (Math.abs(distance) > 50) {

      if (distance < 0) {

        nextSlide();

      } else {

        previousSlide();

      }

      restartSlideshow();

    }

  },
  { passive: true }
);
