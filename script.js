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
