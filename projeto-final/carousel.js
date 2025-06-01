const carousel = document.getElementById("carousel")

events.forEach((event) => {
  carousel.innerHTML += `
    <div class="card">
      <img src="${event.image}" alt="${event.title}">
      <div class="info">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <p>
            <i data-lucide="calendar"></i> ${event.date} às ${event.time} 
            <i data-lucide="map-pin"></i> ${event.location}
          </p>
      </div>
    <div class="card">
  `
})

let index = 0;

function nextCard() {
    index = (index + 1) % events.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + events.length) % events.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

let changeCarouselCardInterval = setInterval(() => {
  nextCard()
}, 5000)

carousel.addEventListener('mouseenter', () => {
  clearInterval(changeCarouselCardInterval);
})

carousel.addEventListener('mouseleave', () => {
  changeCarouselCardInterval = setInterval(() => {
    nextCard()
  }, 5000)
})