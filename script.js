// ================================
// PAGE / SCREEN NAVIGATION
// ================================

function go(number) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach(function (screen) {
    screen.classList.remove("active");
  });

  // Show selected screen
  const nextScreen = document.getElementById("s" + number);

  if (nextScreen) {
    nextScreen.classList.add("active");
  }

  // Scroll to the top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ================================
// NO BUTTON
// ================================

function moveNo(button) {
  // Make the NO button move to a random position
  button.style.position = "relative";

  const x = Math.random() * 180 - 90;
  const y = Math.random() * 80 - 40;

  button.style.left = x + "px";
  button.style.top = y + "px";
}


// ================================
// GIFT BOXES
// ================================

function gift(number) {

  const messages = {
    1: "🎵 Surprise 1 — add your favourite song here.",
    2: "📷 Surprise 2 — add another photo here.",
    3: "📝 Surprise 3 — write your own message here.",
    4: "🌟 Surprise 4 — add anything you want here."
  };

  const message = document.getElementById("msg");

  if (message) {
    message.style.display = "block";
    message.textContent = messages[number];
  }
}


// ================================
// PLAY AGAIN
// ================================

function restartWebsite() {
  location.reload();
}
