document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav button");
  const contentDiv = document.getElementById("content");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  // Load initial content
  loadPage("home.html");

  // Smoothly load pages into #content
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPage = button.getAttribute("data-page");
      loadPage(targetPage);
    });
  });

  // Load HTML pages dynamically
  function loadPage(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        contentDiv.innerHTML = data;
        window.scrollTo(0, 0); // Scroll to top
      })
      .catch((error) => console.error("Error loading page:", error));
  }

  // Handle popup display based on config
  if (CONFIG.enablePopup) {
    popup.querySelector("h2").textContent = CONFIG.popupTitle;
    popup.querySelector("p").textContent = CONFIG.popupMessage;
    popup.classList.remove("hidden");
  }

  // Close popup
  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
// Funkce na generování náhodných vloček
function generateSnowflakes(count) {
  const body = document.querySelector("body");

  for (let i = 0; i < count; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    body.appendChild(snowflake);

    // Odstranění vloček po skončení animace
    snowflake.addEventListener("animationend", () => snowflake.remove());
  }
}

// Generování vloček každou sekundu
setInterval(() => generateSnowflakes(10), 1000);
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");
  const postDetail = document.getElementById("post-detail");
  const closeDetail = document.getElementById("close-detail");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.getAttribute("data-content");
      postDetail.querySelector(".content").textContent = content;
      postDetail.classList.remove("hidden");
    });
  });

  closeDetail.addEventListener("click", () => {
    postDetail.classList.add("hidden");
  });
});
