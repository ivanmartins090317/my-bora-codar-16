const filterElements = document.querySelector("form #filter");
const cards = document.querySelectorAll(" .contacts .list-wrap ");

filterElements.addEventListener("input", filterPerson);

function filterPerson() {
  if (filterElements.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h3");
      title = title.textContent.toLowerCase();

      let filterpersonElement = filterElements.value.toLowerCase();
      if (!title.includes(filterpersonElement)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
