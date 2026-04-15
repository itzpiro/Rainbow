let currentImage = 1;
let totalImages = 6;

// Start directly
function start() {
  showPage("galleryPage");
  enableSwipe();
}

// Page switch
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Update image
function updateImage() {
  let img = document.getElementById("imageDisplay");
  let finalBtn = document.getElementById("finalBtn");
  let finalMessage = document.getElementById("finalMessage");

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = `images/${currentImage}.jpg`;
    img.style.opacity = 1;
  }, 200);

  document.getElementById("counter").innerText = currentImage + " / " + totalImages;

  if (currentImage === totalImages) {
    finalBtn.style.display = "block";
  } else {
    finalBtn.style.display = "none";
    finalMessage.style.display = "none";
    finalMessage.style.opacity = 0;
  }
}

// Next / Prev
function nextImage() {
  if (currentImage < totalImages) {
    currentImage++;
    updateImage();
  }
}

function prevImage() {
  if (currentImage > 1) {
    currentImage--;
    updateImage();
  }
}

// Swipe only (phone)
function enableSwipe() {
  let startX = 0;
  let endX = 0;

  let container = document.querySelector(".story-container");

  container.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchmove", e => {
    endX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", () => {
    let diff = startX - endX;

    if (diff > 50) nextImage();
    else if (diff < -50) prevImage();
  });
}

// Final message
function showMessage() {
  let msg = document.getElementById("finalMessage");

  msg.style.display = "block";

  setTimeout(() => {
    msg.style.opacity = 1;
  }, 100);
}