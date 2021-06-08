let table = document.body.querySelector('#age-table');
let label = document.body.querySelectorAll('#age-table label');
let firstTd = table.querySelector('td');

let form = document.body.querySelector('form[name="search"]');
let firstInput = form.querySelector('input');
let lastInput = form.querySelectorAll('input');
lastInput = lastInput[lastInput.length - 1];

console.log(table);
console.log(label);
console.log(firstTd);
console.log(form);
console.log(firstInput);
console.log(lastInput);

