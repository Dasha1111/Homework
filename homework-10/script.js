

//Task 1
// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(array){
//     return array.slice().sort();
// }

// let sorted = copySorted(arr);
// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)





//Task 2
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(obj => obj.name);
// alert( names );// Вася, Петя, Маша








//Task 3 
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];

// let age = arr.map(obj => obj.age);
// function getAverageAge(users) {
//     return users.reduce((sum, user) => sum + user.age, 0) / users.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28







//Task 4
// function unique(array) {
//     let result = [];
//     for (let item of array) {
//       if (!result.includes(item)){
//         result.push(item);
//       }
//     }
//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//  "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert( unique(strings) ); // кришна, харе, :-O




//Task 5 
// function sum(a) {
//     return function(b) {
//       return a + b; 
//     };
// }
  
// alert(sum(1)(2)); 
// alert(sum(5)(-1)); 






//Task 6
// function inBetween(a, b) {
//     return function(item) {
//       return item >= a && item <= b;
//     };
// }
// function inArray(arr) {
//     return function(item) {
//       return arr.includes(item);
//     };
// }
  
// let arr=[100, 3, 2, 0, 6, 3, 5, 4,  55, 44];
// alert(arr.filter(inBetween(3, 6)));
// alert(arr.filter(inArray([100, 5, 33])));





//Task 7 
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert(factorial(3));//6






//Task 8 
// function fib(n) {
//     let x = 1;
//     let y = 1;
//     for (let i = 3; i <= n; i++) {
//       let z = x + y;
//       x = y;//присваивается значение следующего 
//       y = z;
//     }
//     return y;
// }
  
// alert(fib(3)); // 2
// alert(fib(4)); // 3
// alert(fib(5)); // 5
// alert(fib(6)); // 8
// alert(fib(7)); // 13
// alert(fib(8)); // 21