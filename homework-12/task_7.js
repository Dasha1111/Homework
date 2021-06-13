let panes = document.querySelectorAll('.pane');

for(let item of panes) {
    item.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    item.firstChild.onclick = () => item.remove();
}