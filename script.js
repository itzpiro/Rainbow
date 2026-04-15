let currentImage = 1;
let totalImages = 6;
let deviceType = "";

let captions = [
  "You have no idea how special you are…",
  "Every little thing about you feels different ✨",
  "I don’t say it often… but you matter a lot",
  "Some people just… stay in your mind",
  "And somehow… you became one of them",
  "This is just a small reminder 💖"
];

// Navigation
function goToDevice() {
  showPage("devicePage");
}

function selectDevice(device) {
  deviceType = device;
  showPage("galleryPage");

  if (device === "phone") {
    document.getElementById("leftBtn").style.display = "none";
    document.getElementById("rightBtn").style.display = "none";
    enableSwipe();
  }
}

// Page control
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// Update image + caption
function updateImage() {
  let img = document.getElementById("imageDisplay");
  let caption = document.getElementById("caption");
  let finalBtn = document.getElementById("finalBtn");
  let finalMessage = document.getElementById("finalMessage");

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = `images/${currentImage}.jpg`;
    caption.innerText = captions[currentImage - 1];
    img.style.opacity = 1;
  }, 200);

  // Show button only on last image
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

// Swipe for phone
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

// Final message reveal
function showMessage() {
  let msg = document.getElementById("finalMessage");

  msg.style.display = "block";

  setTimeout(() => {
    msg.style.opacity = 1;
  }, 100);
}