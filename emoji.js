const emojiMappings = {
    "<:happy>": "😊",
    "<:sad>": "😢",
    "<:heart>": "❤️",
    "<:thumbsup>": "👍",
  };
  
  function replaceEmojis(text) {
    // Replace all matching emoji codes with their corresponding emoji
    return text.replace(/<:[a-z]+>/g, (match) => emojiMappings[match] || match);
  }
  
  // Example: Apply to a specific element on the page
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("*");
  
    elements.forEach((element) => {
      if (element.childNodes.length > 0) {
        element.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = replaceEmojis(node.textContent);
          }
        });
      }
    });
  });
  