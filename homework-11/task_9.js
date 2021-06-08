
let one = document.body.querySelector('#one');
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
console.log(document.body.querySelector('ul'));