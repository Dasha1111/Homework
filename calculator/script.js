let input = document.querySelector('.input');

//Вставить символ
function insertSymbol(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}

//Очистить все поле
function clean() {
    input.textContent = "0";
}

//Удалить символа
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

//Вычисление
function countExpression() {
    let exp = input.textContent;
    if (exp) {
        input.textContent = eval(exp);
    }
}

//Проценты
function percent() {
    input.textContent = eval(input.textContent) / 100;
}

//Добавление констант
function constants(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(6);
    if (name == "e")
        input.textContent += Math.E.toFixed(6);
}

//Логарифмы
function log(name) {
    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(4);
    }
}
