
// LESSON 10-1

//Task 10-1
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?  Яблоки, Груша, Апельсин, Банан - потому что обе переменные ссылаются на один массив
// alert( fruits.length ); // ? 4



//Task 10-2
// let styles=["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length-1)/2)]="Классика";
// console.log(styles);



//Task 10-3
// let arr = ["a", "b"];
// arr.push(function() {
//  alert( this );
// })
// arr[2](); // в качестве this выступает массив arr в котором у нас хранится 2 переменные a и b. Плюс к этому добавили третью переменую в виде функции, поэтому выведется a, b и код функции 




// LESSON 10


//Task 1
// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
// return true;
// }

// //For example
// let object={};
// alert(isEmpty(object)); //true
// object[1] = "Daria";
// alert(isEmpty(object)); //false



//Task 2
// let shop= {
//     name: "Shop",
//     count: 500,
//     staff: 30,
// };

// multiplyNumeric(shop);

// function multiplyNumeric(obj) {
//     for (let x in obj) {
//       if (typeof obj[x] == 'number') {
//         obj[x] *= 2;
//       }
//     }
// }

// console.log(shop);




//Task 3
// function readNumber() {
//     let check = true;

//     while (check) {
//       check = false;
//       number = +prompt("Введите число");
//       if (number == null || number == "") {
//         return null;
//       } else if (!isNaN(number)) {
//         return number;
//       } else {
//         check = true;
//       }
//     }
// }
// readNumber();






//Task 4
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );






//Task 5
// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomInteger(1, 10));





//Task 6
// function ucFirst(str) {
//     if (str==false){ 
//         return str;
//     }
//     return str[0].toUpperCase() + str.slice(1);
// }
  
// alert(ucFirst("daria")); 





//Task 7
// function checkSpam(str) {
//     let str2 = str.toLowerCase();
//     return str2.includes('viagra') || str2.includes('xxx');
// }
// alert(checkSpam('buy ViAgRA now'));//true
// alert(checkSpam('free xxxxx'));// true
// alert(checkSpam("innocent rabbit"));//false





//Task 8
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ? str.slice(0, maxlength - 3) + "..." : str;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));





//Task 9
// function changeCurrency(str) {
//     return +str.slice(1);
// }
// alert(changeCurrency("$120"));





//Task 10
// function sumInput() {
//     let numbers = [];
//     while (true) {
//       let value = +prompt("Введите число:");
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(value);
//     }
//     let summa = 0;
//     for (let number of numbers) {
//       summa += number;
//     }
//     return summa;
// }
  
// alert(sumInput());







//Task 11
// function getMaxSubSum(arr) {
//     let max = 0;
//     let sum = 0;
//     for (let item of arr) { 
//       sum += item; 
//       max = Math.max(max, sum); 
//       if (sum < 0){ 
//           sum = 0; 
//       }
//     }
//     return max;
// }

// let array=[1, 4, 6, -3, 2];
// alert(getMaxSubSum(array));






//Task 12
// function checkAge1(age) { if (age > 18) {
//     return true;
//     } else {
//     // ...
//     return confirm('Родители разрешили?');
//     }
// }
   
// function checkAge2(age) {
//     if (age > 18) {
//     return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');//отличий нет, эти функции будут работать одинаково
// }
// alert(checkAge1(4));
// alert(checkAge2(4));







//Task 13
// function checkAge(age) {
//     if (age > 18) {
//     return true;
//     } else {
//     return confirm('Родители разрешили?');
//     }
// }

// function checkAge1(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }//первый способ

// function checkAge2(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }//второй способ

// alert(checkAge1(4));
// alert(checkAge2(4));





//Task 14
// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
// }

// alert(min(4, 0));





//Task 15
// function pow(x, n) {
//     if (n === 1){
//          return x;
//     }
//     return x * pow(x, n - 1);
// }

// let x=+prompt("Введите число:");
// let n=+prompt("Введите степень:");

// if (n < 1) {
//     alert("Введите положительное число");
//   } else {
//     alert( pow(x, n) );
// }






//Task 16
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );





//Task 17
// let palma = 8000;
// let dohod = 3333;
// let cost = 1750;
// let month =0;
// let amount = 0;

// while(amount<8000){
//     amount = amount+dohod;
//     amount = amount-cost;
//     month++;
// }
// console.log(month);








//Task 18
// let numbers = prompt("Введите десять чисел через пробел:");
// let arr = numbers.split(" ").map(Number);
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         result += arr[i];
//     }
// }
// alert(result);






