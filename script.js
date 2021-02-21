const contents = document.querySelectorAll('.content');
const listItem = document.querySelectorAll('nav ul li');

listItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();
    });
});

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'));
}

function hideAllItems() {
    listItem.forEach(item => item.classList.remove('show'));
}