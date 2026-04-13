function changeHeadingText() {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}

function changeBoxColor() {
  const box = document.getElementById('box-to-modify');
  box.style.backgroundColor = 'lightblue';
}

function addNewItem() {
  const list = document.getElementById('item-list');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  list.appendChild(newItem);
}

function highlightParagraph() {
  const para = document.querySelector('.content-para');
  para.classList.add('highlight');
}

function removeElement() {
  const element = document.getElementById('to-be-removed');
  if (element) {
    element.remove();
  }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}
