// Simple greeting animation
window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Ots Spark Wash!");
});

// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Lightbox gallery
const images = document.querySelectorAll(".lightbox-img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;margin:5% auto;display:block;">`;
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

// Search functionality
const searchBar = document.getElementById("searchBar");
if (searchBar) {
  searchBar.addEventListener("keyup", function() {
    const term = this.value.toLowerCase();
    document.querySelectorAll("#serviceList li").forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(term) ? "block" : "none";
    });
  });
}
