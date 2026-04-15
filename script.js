let currentImage = 1;
let totalImages = 6;

// Navigation
function goToDevice() {
  showPage("devicePage");
}

function selectDevice(device) {
  showPage("galleryPage");

  if (device === "phone") {
    document.getElementById("leftBtn").style.display = "none";
    document.getElementById("rightBtn").style.display = "none";
    enableSwipe();
  }
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

  if (currentImage === totalImages) {
    finalBtn.style.display = "inline-block";
  } else {
    finalBtn.style.display = "none";
    finalMessage.style.display = "none";
    finalMessage.style.opacity = 0;
  }
}

// Controls
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

// Swipe (mobile)
function enableSwipe() {
  let startX = 0;
  let img = document.getElementById("imageDisplay");

  img.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  img.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextImage();
    if (endX - startX > 50) prevImage();
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