let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 6;

loadMoreBtn.addEventListener("click", (e) => {
  // When the button is triggered add the cards in array
  let cards = [...document.querySelectorAll(".cards-section .container .cards-content .cards")];
  // First we have 6 cards already displayed and the for loop checks if there are
  // 3 new cards in the array and if so they will be displayed
  for (let i = currentItem; i < currentItem + 6; i++) {
    if (cards[i]) {
      cards[i].style.display = "inline-block";
    }
  }
  // Incerease the variable if there are load 3 new cards
  currentItem += 6;

  // If currentItem is larger or equal to the cards array hide the load more button
  if (currentItem >= cards.length) {
    loadMoreBtn.style.display = "none";
  }
});
