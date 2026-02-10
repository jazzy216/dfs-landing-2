function filterVideos() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const cards = document.getElementsByClassName('video-container');
  const noResults = document.getElementById('noResults');
  let visibleCount = 0;

  for (let i = 0; i < cards.length; i++) {
    const content = cards[i].innerText.toLowerCase();
    if (content.includes(input)) {
      cards[i].style.display = "flex";
      visibleCount++;
    } else {
      cards[i].style.display = "none";
    }
  }
  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

// Bind search event safely after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchBar");
  if (search) search.addEventListener("keyup", filterVideos);

  // Subtle scroll reveal logic
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
  }, observerOptions);

  document.querySelectorAll('.video-container').forEach(card => observer.observe(card));
});
