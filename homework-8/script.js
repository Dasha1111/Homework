

// Task 1
// let i = 3;
// while (i) {
//  alert( i-- );
// } //последним выведется 1, потому что при 0 условие уже будет false и цикл перестанет работать


//Task 2
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// if (numberA <= numberB && numberB <= numberC){
//     numberA*=2;
//     numberB*=2;
//     numberC*=2;
// } else{
//     numberA=-numberA;
//     numberB=-numberB;
//     numberC=-numberC;
// }
// console.log(numberA);
// console.log(numberB);
// console.log(numberC);



//Task 3
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// if ((numberA <= numberB && numberB <= numberC) || (numberA >= numberB && numberB >= numberC)){
//     numberA*=2;
//     numberB*=2;
//     numberC*=2;
// } else{
//     numberA=-numberA;
//     numberB=-numberB;
//     numberC=-numberC;
// }
// console.log(numberA);
// console.log(numberB);
// console.log(numberC);



//Task 4
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// if (Math.abs(numberA-numberB)<Math.abs(numberA-numberC)) {
//     console.log(`Ближе точка B: ${numberB}. 
//     Она находится на расстоянии: `,Math.abs(numberA-numberB))
// } else {
//     console.log(`Ближе точка C: ${numberC}. 
//     Она находится на расстоянии: `,Math.abs(numberA-numberC));
// }




//Task 5
// let numberX=+prompt("Введите координату x:");
// let numberY=+prompt("Введите координату y:");
// if (numberX===0 && numberY===0) {
//     console.log(0);
// }
// if (numberX===0 && (numberY<0 || numberY>0)) {
//     console.log(1);
// }
// if ((numberX<0 || numberX>0) && numberY===0) {
//     console.log(2);
// }
// if ((numberX<0 || numberX>0) && (numberY<0 || numberY>0)) {
//     console.log(3);
// }



//Task 6
// let numberX=+prompt("Введите координату x:");
// let numberY=+prompt("Введите координату y:");
// if (numberX>0 && numberY>0) {
//     console.log('I четверть');
// }
// if (numberX<0 && numberY>0) {
//     console.log('II четверть');
// }
// if (numberX<0 && numberY<0) {
//     console.log('III четверть');
// }
// if (numberX>0 && numberY<0) {
//     console.log('IV четверть');
// }



//Task 7
// let X1=+prompt("Введите координату x1:");
// let Y1=+prompt("Введите координату y1:");
// let X2=+prompt("Введите координату x2:");
// let Y2=+prompt("Введите координату y2:");
// let X3=+prompt("Введите координату x3:");
// let Y3=+prompt("Введите координату y3:");
// let X4;
// let Y4;
// if (X2===X3){
//     X4=X1;
// }  
// if (X3===X1){
//     X4=X2;
// }  
// if (X1===X2){
//     X4=X3;
// }  
// if (Y2===Y3){
//     Y4=Y1;
// }  
// if (Y3===Y1){
//     Y4=Y2;
// }  
// if (Y1===Y2){
//     Y4=Y3;
// }  
// console.log(`Координата X4: ${X4}`);
// console.log(`Координата Y4: ${Y4}`);



//Task 8
// let year=+prompt("Введите год: ");
// let days;
// if (year%400 === 0 || year%4 === 0 && year%100 !== 0 ){
//     days=366;
// } else days=365;
// console.log(`Колличество дней в этом году: ${days} дней`);



//Task 9
// let number=+prompt("Введите число: ");
// if (number===0) {
//     console.log("Нулевое число");
// } else{
//     if (number>0) {
//         console.log("Положительное");
//     }
//     else console.log("Отрицательное");
//     if (number%2 === 0){
//         console.log("Чётное");
//     } 
//     else console.log("Нечётное");
// }




//Task 10
// let number=+prompt("Введите число(1-999): ");
// if (number % 2 === 0){
//     console.log("Чётное");
// } else console.log("Нечётное");
// if (number > 99) {
//     console.log("Трёхзначное");
// } else if (number <= 99 && number>9) {
//     console.log("Двузначное");
// } else if (number <= 9) {
//     console.log("Однозначное");
// }



//Task 11
// let i = 0;
// while (++i < 5) alert( i );// 1 2 3 4

//let i = 0;
//while (i++ < 5) alert( i );// 1 2 3 4 5




//Task 12
// for (let i = 0; i < 5; i++) alert( i );//0 1 2 3 4 
//for (let i = 0; i < 5; ++i) alert( i );// 0 1 2 3 4




//Task 13
// for(let i=0; i<=10; i++){
//     if(i%2===0 && i!==0){
//         alert(i); // 2 4 6 8 10
//     }
// }




//Task 14
// let i=0;
// while(i<3){
//     alert( `number ${i}!` );
//     i++;
// }




//Task 15
// let number;
// do {
//   number = prompt("Введите число, которое больше 100: ");
// } while (number <=100 && number);





//Task 16
// nextRound: for (let i = 2; i <= 10; i++) { 
//   for (let j = 2; j < i; j++) { 
//     if (i % j == 0) continue nextRound; 
//   }
//   alert( i ); //2 3 5 7 
// }




//Task 17
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let avg=(numberA+numberB)/2;
// console.log(avg);




//Task 18
// let number=+prompt("Введите число:");
// number*=number;
// console.log(number);



// //Task 19
// let numberA=+prompt("Введите число a:");
// let numberB=+prompt("Введите число b:");
// let numberC=+prompt("Введите число c:");
// let min, max;
// if (numberA < numberB){
//     min = numberA;
// } else min = numberB;
// if (numberC < min){
//     min = numberC;
// } 
// if (numberA > numberB){
//     max = numberA;
// } else max = numberB;
// if (numberC > max){
//     max = numberC;
// } 
// console.log(max-min);





// //Task 20
// let number=+prompt("Введите число:");
// if (number%2===0){
//     console.log("Чётное");
// } else console.log("Нечётное");




// //Task 21
// let number=+prompt("Введите число a<100:");
// let count;
// let sum;
// if (number < 10){
//     count=1;
//     console.log(count);
// } else {
//     count=2;
//     console.log(count);
// }
// if (number < 10){
//     sum = number % 10;
//     console.log(sum);
// } else{
//     sum = number % 10 + Math.trunc(number / 10);
//     console.log(sum);
// }





//Task 22
// let transfer=prompt("Введите 1 если хотите см пеевести в дюймы или 2 если хотите дюймы перевести в см");
// let number=+prompt("Введите число:");
// let result;
// switch (transfer) {
//     case '1':
//         result = (number / 2.54).toFixed(2);
//         break;
//     case '2':
//         result = number * 2.54;
//         break;
//     default:
//         alert("Неверное значение");
//     }
// alert(result);





//Task 23

// function checkAnswearIsTrue(userAnswear,answears){
//     for(var i = 0; i < answears.length; i++){
//         if (userAnswear ==answears[i].title && answears[i].correct == true) {
//             score += 500;
//             console.log("Правильный ответ");
//             return true;
//         }
//         else 
//         {
//             score = 0;
//             console.log("Ответ неверный");
//             return false;
//         }
//     }
// }
// function getQuestionByNumber(questionId){
//     for(question of questionsList){
//         if(question.id==questionId){
//             return question.title;
//         }
//     }
// }


// function answearsForQuestionWithNumber(questionId) {

//     let answears = []
//     for (answear of answearsList) {
//         if (answear.id == questionId) {
//             answears.push(answear);
//         }
//     }
//     return answears;
// }

// let questionsList = [
//     { id: 1, title: "Сколько океанов на Земле?" },
//     { id: 2, title: "Сколько глаз у человека?" },
//     { id: 3, title: "Я программист?" },
//     { id: 4, title: "Все хорошо?" },
// ]
// let answearsList = [
//     { id: 1, title: "4", correct: true },
//     { id: 1, title: "2", correct: false },
//     { id: 1, title: "1", correct: false },
//     { id: 1, title: "7", correct: false },
//     { id: 2, title: "2", correct: true },
//     { id: 2, title: "1", correct: false },
//     { id: 2, title: "0", correct: false },
//     { id: 2, title: "13", correct: false },
//     { id: 3, title: "да", correct: true },
//     { id: 3, title: "нет", correct: false },
//     { id: 3, title: "dda", correct: false },
//     { id: 3, title: "dda", correct: false },
//     { id: 4, title: "конечно", correct: true },
//     { id: 4, title: "нет", correct: false },
//     { id: 4, title: "странный вопрос", correct: false },
//     { id: 4, title: "пока", correct: false },
// ]

// let score=0;
// for(let counter=1; counter<=questionsList.length; counter++){
//     let getAnswer=prompt(`${getQuestionByNumber(counter)}`);
//     let answearsForQuestion =  answearsForQuestionWithNumber(counter);
//     let result=checkAnswearIsTrue(getAnswer, answearsForQuestion);
//     alert(result);
// }

// alert(score);




//Task 24
// let number=+prompt("Введите трёхзначное число:");
// let a = Math.trunc(number / 100);
// let b = Math.trunc(number / 10) % 10;
// let c = number % 10;
// if(number%2===0){
// console.log('Сумма: ',a+b+c);
// } else{
// console.log('Произведение: ',a*b*c);
// }





//Task 25
// let numberA=+prompt("Введите длину стороны a:");
// let numberB=+prompt("Введите длину стороны b:");
// let numberC=+prompt("Введите длину стороны c:");
// if ((numberA < numberB+numberC) && (numberB < numberA+numberC) && (numberC < numberA+numberB)) {
//     console.log("Треугольник существует");
// } else {
//     console.log("Треугольник не существует");
// }





//Task 26
// let x = 4;
// let y = 9;
// let rad = 10;
// let a = Math.sqrt(x*x + y*y);
// let isTrue;
// if(a>rad){
//     isTrue= "Точка А лежит вне окружности";
// } else{ 
//     isTrue= "Точка А лежит внутри окружности";
// }
// alert( isTrue );





//Task 27
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;






//Task 28
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // это будет работать, user хранит ссылку на объект, и при этом можно менять содержимое объекта 




//Task 29
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let summa = 0;
// for (let key in salaries) {
//     summa += salaries[key];
// }
// alert(summa);






//Task 30
// let i = 0;
// while (i != 10) {
//     console.log(i += 0.2);
// }это бесконечный цикл, потому что числа хранятся в двоичной системе, а в этом случае дробь 2/10 это бесконечная дробь